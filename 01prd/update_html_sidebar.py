
import os
import re

def get_file_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file_content(file_path, content):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def replace_sidebar_in_html(html_content, platform_type, active_item, base_path):
    # 模式1: 匹配从 <!-- 侧边菜单 --> 开始到 <!-- 主内容区 -->
    pattern1 = r'<!-- 侧边菜单 -->.*?<!-- 主内容区 -->'
    replacement = '<!-- 侧边菜单 -->\n            <div id="sidebar"></div>\n            <!-- 主内容区 -->'
    
    if re.search(pattern1, html_content, flags=re.DOTALL):
        html_content = re.sub(pattern1, replacement, html_content, flags=re.DOTALL)
    else:
        # 模式2: 匹配从 <!-- 侧边菜单 --> 到 <div class="main-content">
        pattern2 = r'<!-- 侧边菜单 -->.*?<div class="main-content">'
        if re.search(pattern2, html_content, flags=re.DOTALL):
            html_content = re.sub(pattern2, '<!-- 侧边菜单 -->\n            <div id="sidebar"></div>\n            <div class="main-content">', html_content, flags=re.DOTALL)
        else:
            # 模式3: 匹配从 <div class="side-menu-container"> 开始的区域
            pattern3 = r'<div class="side-menu-container">.*?</div>\s*</div>\s*<!--'
            if re.search(pattern3, html_content, flags=re.DOTALL):
                html_content = re.sub(pattern3, '<div id="sidebar"></div>\n            <!--', html_content, flags=re.DOTALL)
            else:
                print(f"  警告: 无法找到侧边栏模式")
    
    # 添加 components.js 的引用（先检查是否已存在）
    if 'components.js' not in html_content:
        script_tag = f'<script src="{base_path}components.js"></script>\n    '
        init_script = f'''<script>
        document.addEventListener('DOMContentLoaded', function() {{
            initSidebar('{platform_type}', '{active_item}', '{base_path}');
        }});
    </script>
    '''
        html_content = html_content.replace('</body>', f'{script_tag}{init_script}</body>')
    
    return html_content

def process_digital_platform_files(root_dir):
    approval_dir = os.path.join(root_dir, '数字平台/运营系统/申诉审核记录')
    approval_files = [
        ('approval_list.html', 'approval_list', '../'),
        ('approval_detail.html', 'approval_list', '../'),
        ('approve_exemption.html', 'approval_list', '../'),
        ('申诉详情.html', 'approval_list', '../'),
        ('申诉复审.html', 'approval_list', '../')
    ]
    
    for filename, active_item, base_path in approval_files:
        file_path = os.path.join(approval_dir, filename)
        if os.path.exists(file_path):
            print(f"处理文件: {filename}")
            content = get_file_content(file_path)
            new_content = replace_sidebar_in_html(content, 'digital', active_item, base_path)
            write_file_content(file_path, new_content)
            print(f"  ✓ 更新完成")
    
    auto_overdue_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/自动超期记录')
    auto_overdue_files = [
        ('auto_overdue.html', 'auto_overdue', '../../'),
        ('超期详情.html', 'auto_overdue', '../../')
    ]
    
    for filename, active_item, base_path in auto_overdue_files:
        file_path = os.path.join(auto_overdue_dir, filename)
        if os.path.exists(file_path):
            print(f"处理文件: {filename}")
            content = get_file_content(file_path)
            new_content = replace_sidebar_in_html(content, 'digital', active_item, base_path)
            write_file_content(file_path, new_content)
            print(f"  ✓ 更新完成")
    
    strategy_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/超期策略管理')
    strategy_files = [
        ('list.html', 'strategy_list', '../../'),
        ('新增策略.html', 'strategy_list', '../../'),
        ('编辑策略.html', 'strategy_list', '../../'),
        ('detail_modal.html', 'strategy_list', '../../'),
        ('delete_modal.html', 'strategy_list', '../../'),
        ('log_modal.html', 'strategy_list', '../../')
    ]
    
    for filename, active_item, base_path in strategy_files:
        file_path = os.path.join(strategy_dir, filename)
        if os.path.exists(file_path):
            print(f"处理文件: {filename}")
            content = get_file_content(file_path)
            new_content = replace_sidebar_in_html(content, 'digital', active_item, base_path)
            write_file_content(file_path, new_content)
            print(f"  ✓ 更新完成")
    
    category_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/申诉分类管理')
    category_files = [
        ('申诉分类创建.html', 'category_list', '../../'),
        ('新增申诉分类.html', 'category_list', '../../'),
        ('编辑申诉分类.html', 'category_list', '../../'),
        ('申诉分类创建-删除确认.html', 'category_list', '../../')
    ]
    
    for filename, active_item, base_path in category_files:
        file_path = os.path.join(category_dir, filename)
        if os.path.exists(file_path):
            print(f"处理文件: {filename}")
            content = get_file_content(file_path)
            new_content = replace_sidebar_in_html(content, 'digital', active_item, base_path)
            write_file_content(file_path, new_content)
            print(f"  ✓ 更新完成")

def process_open_platform_files(root_dir):
    open_platform_dir = os.path.join(root_dir, '开放平台/超期管理')
    open_files = [
        ('order_overdue_agent.html', 'order_overdue', '../../../'),
        ('申诉列表.html', 'order_overdue', '../../../'),
        ('申诉详情.html', 'order_overdue', '../../../'),
        ('submit_exemption.html', 'order_overdue', '../../../')
    ]
    
    for filename, active_item, base_path in open_files:
        file_path = os.path.join(open_platform_dir, filename)
        if os.path.exists(file_path):
            print(f"处理文件: {filename}")
            content = get_file_content(file_path)
            new_content = replace_sidebar_in_html(content, 'open', active_item, base_path)
            write_file_content(file_path, new_content)
            print(f"  ✓ 更新完成")

def main():
    root_dir = '/Users/xieweizhen/Documents/02TCL光伏/05运营平台/02展业/03 PRD/2026/Q2/03并网超期改造/01prd'
    
    print("开始更新数字平台文件...")
    process_digital_platform_files(root_dir)
    
    print("\n开始更新开放平台文件...")
    process_open_platform_files(root_dir)
    
    print("\n所有文件更新完成！")

if __name__ == '__main__':
    main()
