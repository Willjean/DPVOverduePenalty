"""
HTML到PRD生成器 Agent
用于扫描HTML文件并生成产品需求文档
"""

import os
import re
from datetime import datetime
from typing import List, Dict, Any


class HTMLAnalyzer:
    """HTML文件分析器"""
    
    def __init__(self, directory: str):
        self.directory = directory
        self.html_files = []
        self.analysis_results = []
    
    def find_html_files(self) -> List[str]:
        """查找目录下的所有HTML文件"""
        html_files = []
        for root, dirs, files in os.walk(self.directory):
            for file in files:
                if file.endswith('.html'):
                    html_files.append(os.path.join(root, file))
        self.html_files = html_files
        return html_files
    
    def analyze_file(self, file_path: str) -> Dict[str, Any]:
        """分析单个HTML文件"""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 提取页面标题
        title_match = re.search(r'<title>(.*?)</title>', content)
        title = title_match.group(1) if title_match else os.path.basename(file_path)
        
        # 提取表单元素
        forms = self._extract_forms(content)
        
        # 提取按钮和交互元素
        buttons = self._extract_buttons(content)
        
        # 提取输入字段
        inputs = self._extract_inputs(content)
        
        return {
            'file_path': file_path,
            'file_name': os.path.basename(file_path),
            'title': title,
            'forms': forms,
            'buttons': buttons,
            'inputs': inputs,
            'content': content
        }
    
    def _extract_forms(self, content: str) -> List[Dict]:
        """提取表单信息"""
        forms = []
        form_pattern = r'<form[^>]*>(.*?)</form>'
        for match in re.finditer(form_pattern, content, re.DOTALL):
            forms.append({
                'content': match.group(1),
                'has_submit': 'type="submit"' in match.group(1).lower()
            })
        return forms
    
    def _extract_buttons(self, content: str) -> List[str]:
        """提取按钮文本"""
        buttons = []
        button_pattern = r'<button[^>]*>(.*?)</button>|<a[^>]*>(.*?)</a>'
        for match in re.finditer(button_pattern, content, re.DOTALL):
            text = match.group(1) or match.group(2)
            if text and len(text.strip()) > 0:
                buttons.append(text.strip())
        return buttons
    
    def _extract_inputs(self, content: str) -> List[Dict]:
        """提取输入字段信息"""
        inputs = []
        
        # input标签
        input_pattern = r'<input[^>]*>'
        for match in re.finditer(input_pattern, content):
            input_tag = match.group(0)
            input_info = {
                'type': self._extract_attribute(input_tag, 'type', 'text'),
                'name': self._extract_attribute(input_tag, 'name', ''),
                'required': 'required' in input_tag.lower(),
                'placeholder': self._extract_attribute(input_tag, 'placeholder', ''),
                'min': self._extract_attribute(input_tag, 'min', None),
                'max': self._extract_attribute(input_tag, 'max', None),
                'step': self._extract_attribute(input_tag, 'step', None)
            }
            inputs.append(input_info)
        
        # select标签
        select_pattern = r'<select[^>]*>(.*?)</select>'
        for match in re.finditer(select_pattern, content, re.DOTALL):
            select_info = {
                'type': 'select',
                'name': self._extract_attribute(match.group(0), 'name', ''),
                'required': 'required' in match.group(0).lower()
            }
            inputs.append(select_info)
        
        # textarea标签
        textarea_pattern = r'<textarea[^>]*>'
        for match in re.finditer(textarea_pattern, content):
            textarea_info = {
                'type': 'textarea',
                'name': self._extract_attribute(match.group(0), 'name', ''),
                'required': 'required' in match.group(0).lower()
            }
            inputs.append(textarea_info)
        
        return inputs
    
    def _extract_attribute(self, tag: str, attr: str, default: Any = None) -> Any:
        """从标签中提取属性值"""
        pattern = fr'{attr}="([^"]*)"|{attr}=\'([^\']*)\''
        match = re.search(pattern, tag)
        if match:
            return match.group(1) or match.group(2)
        return default
    
    def analyze_all(self) -> List[Dict]:
        """分析所有HTML文件"""
        results = []
        for file_path in self.find_html_files():
            results.append(self.analyze_file(file_path))
        self.analysis_results = results
        return results


class PRDGenerator:
    """PRD文档生成器"""
    
    def __init__(self, analysis_results: List[Dict]):
        self.analysis_results = analysis_results
        self.today = datetime.now().strftime('%Y-%m-%d')
    
    def generate_prd(self) -> str:
        """生成PRD文档"""
        prd_parts = [
            self._generate_background(),
            self._generate_value(),
            self._generate_function_points(),
            self._generate_detailed_description()
        ]
        return '\n\n'.join(prd_parts)
    
    def _generate_background(self) -> str:
        """生成需求背景"""
        return """## 一、需求背景
根据对HTML文件的分析，该系统是一个用于管理业务流程的Web应用。通过配置规则、管理订单和处理超期情况，实现业务流程的规范化管理。本系统旨在提高工作效率，减少人工操作错误，实现业务流程的自动化和标准化。"""
    
    def _generate_value(self) -> str:
        """生成需求价值"""
        return """## 二、需求价值
通过系统化的规则配置和订单管理，实现业务流程的标准化和自动化，提高工作效率，减少错误率，降低运营成本。"""
    
    def _generate_function_points(self) -> str:
        """生成需求功能点表格"""
        function_points = []
        for result in self.analysis_results:
            page_name = result['title']
            file_name = result['file_name']
            function_points.append(f"| {page_name} | 页面功能 | 运营管理员 | {self.today} |")
        
        return f"""## 三、需求功能点
| 页面名称 | 功能点 | 对应角色 | 添加日期 |
| --- | --- | --- | --- |
{chr(10).join(function_points)}"""
    
    def _generate_detailed_description(self) -> str:
        """生成详细需求描述"""
        descriptions = []
        for idx, result in enumerate(self.analysis_results, 1):
            page_desc = self._generate_page_description(idx, result)
            descriptions.append(page_desc)
        
        return f"""## 四、需求描述

{chr(10).join(descriptions)}"""
    
    def _generate_page_description(self, idx: int, result: Dict) -> str:
        """生成单个页面的描述"""
        page_name = result['title']
        file_path = result['file_name']
        
        # 生成功能描述表格行
        function_rows = []
        
        # 表单功能
        if result['forms']:
            function_rows.append(f"""  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/{file_path}</td>
    <td>表单提交</td>
    <td>
      <strong>业务逻辑：</strong>用户填写表单并提交，系统处理表单数据<br>
      <strong>字段规则：</strong>根据表单元素定义
    </td>
    <td>{self.today}</td>
  </tr>""")
        
        # 按钮功能
        if result['buttons']:
            function_rows.append(f"""  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/{file_path}</td>
    <td>交互操作</td>
    <td>
      <strong>业务逻辑：</strong>用户点击按钮执行相应操作<br>
      <strong>字段规则：</strong>无
    </td>
    <td>{self.today}</td>
  </tr>""")
        
        return f"""### 4.{idx} {page_name}
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
{chr(10).join(function_rows)}
</table>"""


def main():
    """主函数"""
    # 获取当前工作目录
    current_dir = os.getcwd()
    
    print(f"开始扫描目录: {current_dir}")
    
    # 分析HTML文件
    analyzer = HTMLAnalyzer(current_dir)
    analysis_results = analyzer.analyze_all()
    
    print(f"找到 {len(analysis_results)} 个HTML文件")
    
    # 生成PRD
    generator = PRDGenerator(analysis_results)
    prd_content = generator.generate_prd()
    
    # 保存PRD
    output_file = os.path.join(current_dir, 'prd_output.md')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(prd_content)
    
    print(f"PRD文档已生成: {output_file}")


if __name__ == "__main__":
    main()
