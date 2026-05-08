
import os
import re

def get_file_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file_content(file_path, content):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_html_file(file_path, platform_type, active_item, components_path, init_params):
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
            initSidebar({init_params});
        }});
    </script>
    </body>'''
    
    content = content.replace('</body>', new_script)
    
    write_file_content(file_path, content)
    print(f"  ✓ 已更新: {os.path.basename(file_path)}")

def main():
    root_dir = '/Users/xieweizhen/Documents/02TCL光伏/05运营平台/02展业/03 PRD/2026/Q2/03并网超期改造/01prd'
    
    # 更新开放平台文件
    print("更新开放平台文件...")
    open_platform_dir = os.path.join(root_dir, '开放平台/超期管理')
    open_files = [
        ('order_overdue_agent.html', "'order_overdue'"),
        ('申诉列表.html', "'order_overdue'"),
        ('申诉详情.html', "'order_overdue'"),
        ('submit_exemption.html', "'order_overdue'")
    ]
    
    for filename, active_item in open_files:
        file_path = os.path.join(open_platform_dir, filename)
        if os.path.exists(file_path):
            update_html_file(
                file_path,
                'open',
                active_item,
                '../components.js',
                active_item
            )
    
    # 更新数字平台 - 申诉审核记录
    print("\n更新数字平台 - 申诉审核记录...")
    approval_dir = os.path.join(root_dir, '数字平台/运营系统/申诉审核记录')
    approval_files = [
        ('approval_list.html', "'approval_list'", "'../'"),
        ('approval_detail.html', "'approval_list'", "'../'"),
        ('approve_exemption.html', "'approval_list'", "'../'"),
        ('申诉详情.html', "'approval_list'", "'../'"),
        ('申诉复审.html', "'approval_list'", "'../'")
    ]
    
    for filename, active_item, base_path in approval_files:
        file_path = os.path.join(approval_dir, filename)
        if os.path.exists(file_path):
            update_html_file(
                file_path,
                'digital',
                active_item,
                '../../components.js',
                f"{active_item}, {base_path}"
            )
    
    # 更新数字平台 - 自动超期记录
    print("\n更新数字平台 - 自动超期记录...")
    auto_overdue_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/自动超期记录')
    auto_overdue_files = [
        ('auto_overdue.html', "'auto_overdue'", "'../../'"),
        ('超期详情.html', "'auto_overdue'", "'../../'")
    ]
    
    for filename, active_item, base_path in auto_overdue_files:
        file_path = os.path.join(auto_overdue_dir, filename)
        if os.path.exists(file_path):
            update_html_file(
                file_path,
                'digital',
                active_item,
                '../../../components.js',
                f"{active_item}, {base_path}"
            )
    
    # 更新数字平台 - 超期策略管理
    print("\n更新数字平台 - 超期策略管理...")
    strategy_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/超期策略管理')
    strategy_files = [
        ('list.html', "'strategy_list'", "'../../'"),
        ('新增策略.html', "'strategy_list'", "'../../'"),
        ('编辑策略.html', "'strategy_list'", "'../../'"),
        ('detail_modal.html', "'strategy_list'", "'../../'"),
        ('delete_modal.html', "'strategy_list'", "'../../'"),
        ('log_modal.html', "'strategy_list'", "'../../'")
    ]
    
    for filename, active_item, base_path in strategy_files:
        file_path = os.path.join(strategy_dir, filename)
        if os.path.exists(file_path):
            update_html_file(
                file_path,
                'digital',
                active_item,
                '../../../components.js',
                f"{active_item}, {base_path}"
            )
    
    # 更新数字平台 - 申诉分类管理
    print("\n更新数字平台 - 申诉分类管理...")
    category_dir = os.path.join(root_dir, '数字平台/运营系统/超期管理/申诉分类管理')
    category_files = [
        ('申诉分类创建.html', "'category_list'", "'../../'"),
        ('新增申诉分类.html', "'category_list'", "'../../'"),
        ('编辑申诉分类.html', "'category_list'", "'../../'"),
        ('申诉分类创建-删除确认.html', "'category_list'", "'../../'")
    ]
    
    for filename, active_item, base_path in category_files:
        file_path = os.path.join(category_dir, filename)
        if os.path.exists(file_path):
            update_html_file(
                file_path,
                'digital',
                active_item,
                '../../../components.js',
                f"{active_item}, {base_path}"
            )
    
    print("\n所有文件更新完成！")

if __name__ == '__main__':
    main()
