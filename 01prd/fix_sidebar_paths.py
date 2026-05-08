
import os
import re

def get_file_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file_content(file_path, content):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_html_file(file_path, active_item, components_path, current_dir):
    """更新HTML文件中的components.js引用和初始化脚本"""
    content = get_file_content(file_path)
    
    # 移除旧的components.js引用
    content = re.sub(r'<script src="[^"]*components\.js"></script>\s*', '', content)
    
    # 移除旧的initSidebar调用
    content = re.sub(
        r'<script>\s*document\.addEventListener\(\'DOMContentLoaded\',\s*function\(\)\s*\{\s*initSidebar\([^)]+\);\s*\}\);\s*</script>',
        '',
        content,
        flags=re.DOTALL
    )
    
    # 添加新的components.js引用和初始化脚本
    new_script = f'''<script src="{components_path}"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {{
            initSidebar('{active_item}', '{current_dir}');
        }});
    </script>
    </body>'''
    
    content = content.replace('</body>', new_script)
    
    write_file_content(file_path, content)
    print(f"  ✓ 已更新: {os.path.basename(file_path)}")

def main():
    root_dir = '/Users/xieweizhen/Documents/02TCL光伏/05运营平台/02展业/03 PRD/2026/Q2/03并网超期改造/01prd'
    
    # 更新数字平台 - 申诉审核记录
    print("更新数字平台 - 申诉审核记录...")
    approval_dir = os.path.join(root_dir, '数字平台/运营系统/申诉审核记录')
    approval_files = [
        ('approval_list.html', 'approval_list', '../../components.js', 'approval'),
        ('approval_detail.html', 'approval_list', '../../components.js', 'approval'),
        ('approve_exemption.html', 'approval_list', '../../components.js', 'approval'),
        ('申诉详情.html', 'approval_list', '../../components.js', 'approval'),
        ('申诉复审.html', 'approval_list', '../../components.js', 'approval')
    ]
    
    for filename, active_item, components_path, current_dir in approval_files:
        file_path = os.path.join(approval_dir, filename)
        if os.path.exists(file_path):
            update_html_file(file_path, active_item, components_path, current_dir)
    
    # 更新数字平台 - 自动超期记录
    print("\n更新数字平台 - 自动超期记录...")
    auto_overdue_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/自动超期记录')
    auto_overdue_files = [
        ('auto_overdue.html', 'auto_overdue', '../../../components.js', 'auto'),
        ('超期详情.html', 'auto_overdue', '../../../components.js', 'auto')
    ]
    
    for filename, active_item, components_path, current_dir in auto_overdue_files:
        file_path = os.path.join(auto_overdue_dir, filename)
        if os.path.exists(file_path):
            update_html_file(file_path, active_item, components_path, current_dir)
    
    # 更新数字平台 - 超期策略管理
    print("\n更新数字平台 - 超期策略管理...")
    strategy_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/超期策略管理')
    strategy_files = [
        ('list.html', 'strategy_list', '../../../components.js', 'strategy'),
        ('新增策略.html', 'strategy_list', '../../../components.js', 'strategy'),
        ('编辑策略.html', 'strategy_list', '../../../components.js', 'strategy'),
        ('detail_modal.html', 'strategy_list', '../../../components.js', 'strategy'),
        ('delete_modal.html', 'strategy_list', '../../../components.js', 'strategy'),
        ('log_modal.html', 'strategy_list', '../../../components.js', 'strategy')
    ]
    
    for filename, active_item, components_path, current_dir in strategy_files:
        file_path = os.path.join(strategy_dir, filename)
        if os.path.exists(file_path):
            update_html_file(file_path, active_item, components_path, current_dir)
    
    # 更新数字平台 - 申诉分类管理
    print("\n更新数字平台 - 申诉分类管理...")
    category_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/申诉分类管理')
    category_files = [
        ('申诉分类创建.html', 'category_list', '../../../components.js', 'category'),
        ('新增申诉分类.html', 'category_list', '../../../components.js', 'category'),
        ('编辑申诉分类.html', 'category_list', '../../../components.js', 'category'),
        ('申诉分类创建-删除确认.html', 'category_list', '../../../components.js', 'category')
    ]
    
    for filename, active_item, components_path, current_dir in category_files:
        file_path = os.path.join(category_dir, filename)
        if os.path.exists(file_path):
            update_html_file(file_path, active_item, components_path, current_dir)
    
    print("\n所有文件更新完成！")

if __name__ == '__main__':
    main()
