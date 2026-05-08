---
name: HTML到UI重构工具
description: 将HTML文件重构为使用现代化设计系统的UI，保持DOM结构和业务逻辑不变
---

# HTML到UI重构工具

## 功能描述

本工具用于将HTML文件重构为使用现代化设计系统的UI，主要功能包括：

1. 创建完整的设计系统（CSS变量）
2. 自动识别并重构HTML文件
3. 替换Tailwind CSS类为自定义设计系统类
4. 保持DOM结构和业务逻辑不变

## 输入参数

- `target_directory`：目标目录路径，默认值为当前目录
- `create_theme`：是否创建新的theme.css文件，默认值为true
- `theme_path`：主题文件路径，默认值为当前目录下的theme.css

## 输出结果

- 生成的theme.css文件（如果create_theme为true）
- 重构后的HTML文件
- 重构统计信息

## 使用示例

### 基本用法

```bash
# 重构当前目录下的所有HTML文件
node index.js

# 重构指定目录下的HTML文件
node index.js --target_directory ./src

# 使用自定义主题文件路径
node index.js --theme_path ./styles/theme.css

# 不创建新的主题文件（使用现有文件）
node index.js --create_theme false
```

### 作为TRAE技能使用

1. 在TRAE平台上传本技能包
2. 配置输入参数
3. 运行技能进行HTML重构

## 设计系统说明

生成的设计系统包含以下主要部分：

- **颜色系统**：主色、辅助色、中性色等
- **排版系统**：字体大小、字重、行高
- **间距系统**：统一的间距单位
- **组件样式**：按钮、输入框、表格等
- **响应式断点**：不同屏幕尺寸的适配

## 注意事项

- 本工具会覆盖原HTML文件，请确保在运行前备份重要文件
- 对于复杂的HTML结构，可能需要手动调整某些样式
- 本工具仅处理CSS类的替换，不会修改JavaScript逻辑

## 技术实现

- 使用Node.js文件系统API进行文件操作
- 使用正则表达式进行CSS类的匹配和替换
- 模块化设计，便于维护和扩展