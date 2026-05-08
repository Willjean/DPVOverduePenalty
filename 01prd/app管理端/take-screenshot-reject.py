#!/usr/bin/env python3
"""临时截图脚本 - 并网超期驳回页面"""

import os
import sys
import time
import threading
import socket
from http.server import HTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright

def find_available_port():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(('', 0))
    port = sock.getsockname()[1]
    sock.close()
    return port

def start_server(port, directory):
    os.chdir(directory)
    server_address = ('', port)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"服务器启动在 http://localhost:{port}")
    httpd.serve_forever()

def take_full_screenshots(html_files, output_dir):
    port = find_available_port()
    print(f"使用端口: {port}")

    html_file_dir = os.path.dirname(os.path.abspath(html_files[0]))
    
    server_thread = threading.Thread(target=start_server, args=(port, html_file_dir), daemon=True)
    server_thread.start()

    time.sleep(2)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 393, 'height': 852})
        
        for html_file in html_files:
            base_name = os.path.basename(html_file)
            output_file = os.path.join(output_dir, f"{os.path.splitext(base_name)[0]}.png")
            url = f'http://localhost:{port}/{base_name}'
            
            print(f'正在处理: {html_file}')
            print(f'访问: {url}')
            
            try:
                page.goto(url, wait_until='networkidle', timeout=30000)
                time.sleep(2)
                page.screenshot(path=output_file, full_page=True)
                print(f'已保存: {output_file}')
            except Exception as e:
                print(f'处理 {html_file} 时出错: {e}')
        
        browser.close()
        print('所有截图已完成！')

if __name__ == '__main__':
    html_files = sys.argv[1:]
    if not html_files:
        html_files = ['并网超期驳回.html']
    
    output_dir = '.'
    take_full_screenshots(html_files, output_dir)
