#!/usr/bin/env python3
import os
import re

# 1. 更新 submit_exemption.html
file_path = 'submit_exemption.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 替换导航栏
content = re.sub(
    r'<nav class="header-bg header-shadow">(.*?)</nav>',
    r'''<header class="header-bg header-shadow">
        <div class="px-4 py-3 flex justify-between items-center">
            <h1 class="header-title">TCL光伏开放平台</h1>
            <div class="flex items-center space-x-4">
                <span class="text-sm">代理商</span>
                <button class="btn btn-secondary btn-sm">退出</button>
            </div>
        </div>
    </header>''',
    content,
    flags=re.DOTALL
)

# 替换主内容区结构
content = re.sub(
    r'<main class="px-4 py-8">(.*?)<section class="mb-12">',
    r'''<main class="flex-1 px-4 py-6">
        <div class="main-layout">
            <!-- 侧边菜单 -->
            <div id="sidebar"></div>
            <!-- 主内容区 -->
            <div class="main-content">
                <section class="mb-12">''',
    content,
    flags=re.DOTALL
)

# 查找main结束位置并添加闭合标签
main_end_match = re.search(r'</main>(?!.*</main>)', content)
if main_end_match:
    insert_pos = main_end_match.start()
    content = content[:insert_pos] + '            </div>\n        </div>\n' + content[insert_pos:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Updated {file_path}")

# 2. 检查所有HTML文件
html_files = [
    'order_overdue_agent.html',
    '申诉详情.html',
    'submit_exemption.html',
    '超期详情.html',
    '申诉列表.html'
]

print("\nChecking all HTML files:")
for html_file in html_files:
    if os.path.exists(html_file):
        with open(html_file, 'r', encoding='utf-8') as f:
            file_content = f.read()
        
        has_sidebar = 'id="sidebar"' in file_content
        has_components = 'components.js' in file_content
        has_init = 'initSidebar' in file_content
        
        print(f"{html_file}:")
        print(f"  - Sidebar element: {'✅' if has_sidebar else '❌'}")
        print(f"  - Components.js: {'✅' if has_components else '❌'}")
        print(f"  - initSidebar: {'✅' if has_init else '❌'}")
    else:
        print(f"{html_file}: ❌ File not found")

print("\nAll files checked and updated!")
