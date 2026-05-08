#!/usr/bin/env python3
"""
HTML页面完整截图工具

此工具用于生成HTML页面的完整截图，捕获整个页面内容而不仅仅是窗口可见部分。

用法：
python html_screenshot_tool.py [html_files...]

如果不指定html_files，则会处理当前目录下的所有HTML文件。
"""

import os
import sys
import time
import threading
import socket
from http.server import HTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright

# 查找可用端口
def find_available_port():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(('', 0))
    port = sock.getsockname()[1]
    sock.close()
    return port

# 启动HTTP服务器的函数
def start_server(port, directory):
    os.chdir(directory)
    server_address = ('', port)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"服务器启动在 http://localhost:{port}")
    httpd.serve_forever()

# 生成完整页面截图
def take_full_screenshots(html_files, output_dir):
    # 查找可用端口
    port = find_available_port()
    print(f"使用端口: {port}")

    # 在后台线程中启动服务器
    server_thread = threading.Thread(target=start_server, args=(port, os.path.dirname(os.path.abspath(html_files[0]))), daemon=True)
    server_thread.start()

    # 等待服务器启动
    time.sleep(2)

    with sync_playwright() as p:
        # 启动浏览器
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        for html_file in html_files:
            # 获取文件名（不含路径）
            base_name = os.path.basename(html_file)
            # 生成输出文件名
            output_file = os.path.join(output_dir, f"{os.path.splitext(base_name)[0]}.png")
            
            # 构建URL
            url = f'http://localhost:{port}/{base_name}'
            print(f'正在处理: {html_file}')
            print(f'访问: {url}')
            
            try:
                # 导航到页面
                page.goto(url, wait_until='networkidle', timeout=30000)
                
                # 等待页面完全加载
                time.sleep(2)
                
                # 截图 - 使用full_page=True
                page.screenshot(path=output_file, full_page=True)
                print(f'已保存: {output_file}')
            except Exception as e:
                print(f'处理 {html_file} 时出错: {e}')
        
        browser.close()
        print('所有截图已完成！')

if __name__ == '__main__':
    # 处理命令行参数
    if len(sys.argv) > 1:
        # 使用命令行指定的HTML文件
        html_files = sys.argv[1:]
    else:
        # 查找当前目录下的所有HTML文件
        html_files = [f for f in os.listdir('.') if f.endswith('.html')]
        
    if not html_files:
        print('未找到HTML文件')
        sys.exit(1)
    
    # 输出目录
    output_dir = '.'
    
    # 执行截图
    take_full_screenshots(html_files, output_dir)
