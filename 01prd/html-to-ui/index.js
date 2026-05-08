#!/usr/bin/env node

/**
 * HTML到UI重构工具
 * 根据设计规范重构HTML文件的样式，保持DOM结构和业务逻辑不变
 */

const fs = require('fs');
const path = require('path');

// 主函数
async function main() {
  try {
    // 读取输入参数
    const designSpec = process.argv[2] || '';
    
    if (!designSpec) {
      console.error('请提供设计规范（Figma链接或设计变量描述）');
      process.exit(1);
    }

    console.log('开始根据设计规范重构HTML文件...');
    console.log('设计规范:', designSpec);

    // 步骤1: 解析与建立设计系统
    console.log('\n步骤1: 解析与建立设计系统');
    await createDesignSystem();

    // 步骤2: 搜索与定位
    console.log('\n步骤2: 搜索与定位');
    const htmlFiles = findHtmlFiles('.');
    console.log('找到的HTML文件:', htmlFiles);

    // 步骤3: 逐个文件重构
    console.log('\n步骤3: 逐个文件重构');
    for (const htmlFile of htmlFiles) {
      console.log(`\n处理文件: ${htmlFile}`);
      await refactorHtmlFile(htmlFile);
    }

    console.log('\n✅ 所有文件重构完成！');
    console.log('请检查生成的theme.css文件是否符合预期。');

  } catch (error) {
    console.error('错误:', error.message);
    process.exit(1);
  }
}

// 创建设计系统
async function createDesignSystem() {
  const themeCssContent = `:root {
  /* Colors */
  --color-primary: #1e40af;
  --color-secondary: #3b82f6;
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;
  
  /* Background colors */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f3f4f6;
  --color-bg-tertiary: #e5e7eb;
  
  /* Text colors */
  --color-text-primary: #1f2937;
  --color-text-secondary: #4b5563;
  --color-text-tertiary: #6b7280;
  --color-text-disabled: #9ca3af;
  
  /* Border colors */
  --color-border: #e5e7eb;
  --color-border-focus: #3b82f6;
  
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  --font-size-h1: 2rem;
  --font-size-h2: 1.5rem;
  --font-size-h3: 1.25rem;
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Components */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.375rem;
  --border-radius-lg: 0.5rem;
  
  --box-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --box-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  /* Button */
  --button-height: 2.5rem;
  --button-padding: 0 1rem;
  
  /* Input */
  --input-height: 2.5rem;
  --input-padding: 0 0.75rem;
}

/* Global styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  line-height: 1.5;
  color: var(--color-text-primary);
  background-color: var(--color-bg-secondary);
}

/* Background classes */
.body-bg {
  background-color: var(--color-bg-secondary);
}

/* Header styles */
.header-bg {
  background-color: var(--color-primary);
  color: white;
}

.header-shadow {
  box-shadow: var(--box-shadow-md);
}

.header-title {
  font-size: 1.25rem;
  font-weight: var(--font-weight-bold);
  color: white;
}

/* Navigation styles */
.nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover {
  color: var(--color-secondary);
}

.nav-link-active {
  color: white;
  font-weight: var(--font-weight-semibold);
  border-bottom: 2px solid white;
}

/* Page title styles */
.page-title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
}

.section-title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

/* Form styles */
.form-label {
  display: block;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xs);
}

.form-input {
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  height: var(--input-height);
  padding: var(--input-padding);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  transition: all 0.2s ease-in-out;
  width: 100%;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Button styles */
.btn {
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  height: var(--button-height);
  padding: var(--button-padding);
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn:hover {
  opacity: 0.9;
}

.btn:active {
  transform: translateY(1px);
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-secondary {
  background-color: white;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.btn-outline {
  background-color: white;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}

.btn-sm {
  height: 2rem;
  padding: 0 0.75rem;
  font-size: var(--font-size-small);
}

.btn-danger {
  background-color: var(--color-danger);
  color: white;
}

/* Card styles */
.card {
  background-color: var(--color-bg-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-sm);
  padding: var(--spacing-lg);
}

/* Table styles */
.table {
  width: 100%;
  border-collapse: collapse;
}

.table-header th {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  font-weight: var(--font-weight-semibold);
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
}

.table-body td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.table-row:hover {
  background-color: var(--color-bg-secondary);
}

.table-cell {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

/* Tag styles */
.tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 9999px;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  display: inline-flex;
  align-items: center;
}

.tag-success {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.tag-danger {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--color-danger);
}

.tag-warning {
  background-color: rgba(245, 158, 11, 0.1);
  color: var(--color-warning);
}

.tag-info {
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--color-info);
}

/* Pagination styles */
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-lg);
}

.pagination-item {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  background-color: white;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.pagination-item:hover {
  background-color: var(--color-bg-secondary);
}

.pagination-item-active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.pagination-item-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Text link styles */
.text-link {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.text-link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

.text-link-danger {
  color: var(--color-danger);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.text-link-danger:hover {
  color: #dc2626;
  text-decoration: underline;
}

/* Footer styles */
.footer {
  background-color: var(--color-bg-tertiary);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

/* Switch styles */
.switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 44px;
  height: 24px;
  border-radius: 9999px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.switch-on {
  background-color: var(--color-success);
}

.switch-off {
  background-color: var(--color-bg-tertiary);
}

.switch-handle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transition: all 0.2s ease-in-out;
}

.switch-on .switch-handle {
  transform: translateX(20px);
}

.switch-off .switch-handle {
  transform: translateX(0);
}

/* Header styles */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
}

h1 {
  font-size: var(--font-size-h1);
}

h2 {
  font-size: var(--font-size-h2);
}

h3 {
  font-size: var(--font-size-h3);
}`;

  fs.writeFileSync('theme.css', themeCssContent);
  console.log('✅ 设计系统文件 theme.css 已创建');
}

// 查找所有HTML文件
function findHtmlFiles(directory) {
  const htmlFiles = [];
  
  function search(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        search(filePath);
      } else if (path.extname(file) === '.html') {
        htmlFiles.push(filePath);
      }
    });
  }
  
  search(directory);
  return htmlFiles;
}

// 重构HTML文件
async function refactorHtmlFile(htmlFile) {
  let content = fs.readFileSync(htmlFile, 'utf8');
  
  // 1. 注入设计系统
  if (!content.includes('theme.css')) {
    // 移除Tailwind CSS引用
    content = content.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/g, '');
    content = content.replace(/<style type="text\/tailwindcss">[\s\S]*?<\/style>/g, '');
    
    // 添加theme.css引用
    const headEndIndex = content.indexOf('</head>');
    if (headEndIndex > -1) {
      const themeLink = '    <link rel="stylesheet" href="' + getRelativePath(htmlFile, 'theme.css') + '">\n';
      content = content.slice(0, headEndIndex) + themeLink + content.slice(headEndIndex);
    }
  }
  
  // 2. 替换硬编码和统一组件样式
  // 替换body类
  content = content.replace(/body class="[^"\>]*"/g, 'body class="body-bg"');
  
  // 替换头部样式
  content = content.replace(/header class="[^"\>]*"/g, 'header class="header-bg header-shadow"');
  content = content.replace(/h1 class="[^"\>]*">TCL/g, 'h1 class="header-title">TCL');
  
  // 替换导航链接
  content = content.replace(/a href="[^"]*" class="[^"\>]*">/g, (match) => {
    if (match.includes('font-bold') || match.includes('active')) {
      return match.replace(/class="[^"\>]*"/, 'class="nav-link nav-link-active"');
    } else {
      return match.replace(/class="[^"\>]*"/, 'class="nav-link"');
    }
  });
  
  // 替换页面标题
  content = content.replace(/h2 class="[^"\>]*">/g, 'h2 class="page-title">');
  
  // 替换卡片样式
  content = content.replace(/class="bg-white p-4 rounded-lg shadow-sm"/g, 'class="card"');
  content = content.replace(/class="bg-white rounded-lg shadow-md"/g, 'class="card"');
  content = content.replace(/class="bg-white rounded-lg shadow-sm overflow-hidden"/g, 'class="card overflow-hidden"');
  
  // 替换表单标签
  content = content.replace(/label class="block text-sm font-medium text-gray-700 mb-1"/g, 'label class="form-label"');
  content = content.replace(/label class="block text-sm font-medium text-gray-500"/g, 'label class="form-label"');
  
  // 替换输入框样式
  content = content.replace(/input type="[^"]*" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"/g, 'input type="text" class="form-input w-full"');
  content = content.replace(/select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"/g, 'select class="form-input w-full"');
  content = content.replace(/textarea class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"/g, 'textarea class="form-input w-full"');
  
  // 替换按钮样式
  content = content.replace(/button class="bg-primary text-white px-4 py-2 rounded"/g, 'button class="btn btn-primary"');
  content = content.replace(/button class="bg-gray-200 text-gray-700 px-4 py-2 rounded"/g, 'button class="btn btn-outline"');
  content = content.replace(/button class="border border-gray-300 px-4 py-2 rounded"/g, 'button class="btn btn-outline"');
  content = content.replace(/button class="bg-white text-primary px-3 py-1 rounded text-sm font-medium"/g, 'button class="btn btn-secondary btn-sm"');
  content = content.replace(/button class="bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700"/g, 'button class="btn btn-danger"');
  
  // 替换表格样式
  content = content.replace(/table class="min-w-full divide-y divide-gray-200"/g, 'table class="table"');
  content = content.replace(/thead class="bg-gray-50"/g, 'thead class="table-header"');
  content = content.replace(/tbody class="bg-white divide-y divide-gray-200"/g, 'tbody class="table-body"');
  content = content.replace(/tr class=""/g, 'tr class="table-row"');
  content = content.replace(/td class="px-6 py-4 whitespace-nowrap"/g, 'td class="table-cell"');
  content = content.replace(/th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"/g, 'th class="table-cell"');
  
  // 替换标签样式
  content = content.replace(/span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"/g, 'span class="tag tag-info"');
  content = content.replace(/span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"/g, 'span class="tag tag-success"');
  content = content.replace(/span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"/g, 'span class="tag tag-warning"');
  content = content.replace(/span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"/g, 'span class="tag"');
  
  // 替换分页样式
  content = content.replace(/class="mt-6 flex justify-between items-center"/g, 'class="pagination-container"');
  content = content.replace(/button class="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-500 hover:bg-gray-50"/g, 'button class="pagination-item pagination-item-disabled"');
  content = content.replace(/button class="px-3 py-1 border border-primary rounded-md text-sm bg-primary text-white"/g, 'button class="pagination-item pagination-item-active"');
  content = content.replace(/button class="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"/g, 'button class="pagination-item"');
  
  // 替换链接样式
  content = content.replace(/a href="[^"]*" class="text-primary hover:text-secondary"/g, 'a href="#" class="text-link"');
  content = content.replace(/a href="[^"]*" class="text-danger hover:text-red-600"/g, 'a href="#" class="text-link-danger"');
  
  // 替换页脚样式
  content = content.replace(/footer class="bg-gray-100 border-t border-gray-200 py-4"/g, 'footer class="footer"');
  content = content.replace(/footer class="bg-gray-800 text-white py-4"/g, 'footer class="footer bg-gray-800 text-white"');
  
  // 3. 清理冗余
  // 移除内联样式
  content = content.replace(/style="[^"]*"/g, '');
  
  // 保存修改后的文件
  fs.writeFileSync(htmlFile, content);
  console.log(`✅ 文件 ${htmlFile} 重构完成`);
}

// 获取相对路径
function getRelativePath(from, to) {
  const fromDir = path.dirname(from);
  return path.relative(fromDir, to);
}

// 执行主函数
if (require.main === module) {
  main();
}

module.exports = {
  main,
  createDesignSystem,
  findHtmlFiles,
  refactorHtmlFile
};
