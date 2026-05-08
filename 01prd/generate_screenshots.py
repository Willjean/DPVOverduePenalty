import os
import asyncio
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler

# HTML files to screenshot
html_files = [
    "数字平台/运营系统/超期管理/申诉原因管理/审核原因列表.html",
    "数字平台/运营系统/超期管理/申诉原因管理/日志.html",
    "数字平台/运营系统/超期管理/申诉原因管理/申诉原因创建-删除确认.html",
    "数字平台/运营系统/超期管理/申诉原因管理/编辑申诉原因.html",
    "数字平台/运营系统/超期管理/申诉原因管理/新增申诉原因.html"
]

def start_server(port=8000):
    os.chdir("/Users/xieweizhen/Documents/02TCL光伏/05运营平台/02展业/03 PRD/2026/Q2/03并网超期改造/01prd")
    server = HTTPServer(('localhost', port), SimpleHTTPRequestHandler)
    server.serve_forever()

async def generate_screenshots():
    # Start HTTP server in background
    server_thread = threading.Thread(target=start_server)
    server_thread.daemon = True
    server_thread.start()
    
    # Wait for server to start
    await asyncio.sleep(2)
    
    try:
        from pyppeteer import launch
        
        # Launch browser
        browser = await launch({
            'headless': True,
            'args': ['--no-sandbox', '--disable-dev-shm-usage', '--window-size=1920,1080']
        })
        
        base_url = "http://localhost:8000/"
        
        for html_file in html_files:
            try:
                page = await browser.newPage()
                url = base_url + html_file
                await page.goto(url, {'waitUntil': 'networkidle2', 'timeout': 30000})
                await asyncio.sleep(2)
                
                # Generate output filename
                output_file = html_file.replace('.html', '.png')
                output_path = os.path.join(
                    "/Users/xieweizhen/Documents/02TCL光伏/05运营平台/02展业/03 PRD/2026/Q2/03并网超期改造/01prd",
                    output_file
                )
                
                # Take screenshot
                await page.screenshot({'path': output_path, 'fullPage': True})
                print(f"Generated: {output_file}")
                
                await page.close()
                
            except Exception as e:
                print(f"Error generating screenshot for {html_file}: {str(e)}")
        
        await browser.close()
        print("\nAll screenshots generated successfully!")
        
    except ImportError:
        print("Pyppeteer not installed properly")
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    asyncio.run(generate_screenshots())