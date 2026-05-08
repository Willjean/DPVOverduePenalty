---
name: sign of html
description: 为HTML页面添加序号标记，确保标记在页面滚动时保持在正确位置。
---

# sign of html

## 技能名称
sign of html

## 技能描述
为HTML页面添加序号标记，确保标记在页面滚动时保持在正确位置。

## 技能功能
- 为HTML页面的元素添加序号标记
- 确保标记在页面滚动时保持在正确位置
- 为标记添加悬停提示，显示功能点的详细描述
- 支持自定义标记样式和提示框样式

## 技术实现
- 使用相对定位确保标记随元素滚动
- 支持动态添加标记和提示框
- 提供配置选项，可自定义标记样式

## 安装方法
1. 将`skill-sign-of-html.js`文件引入到HTML页面中
2. 调用`SignOfHtml.addFeatureMarkers()`函数为元素添加标记
3. 调用`SignOfHtml.addTooltips()`函数添加工具提示

## 使用示例

### 示例1：为页面元素添加标记
```javascript
// 引入技能
<script src="skill-sign-of-html.js"></script>

// 为页面元素添加标记
const elements = document.querySelectorAll('.form-label');
SignOfHtml.addFeatureMarkers(elements);
```

### 示例2：添加工具提示
```javascript
// 添加工具提示
const tooltips = [
  {
    title: '返回按钮',
    content: [
      '业务逻辑：用户点击返回按钮，系统返回上一页',
      '字段规则：无'
    ]
  },
  {
    title: '订单编号字段',
    content: [
      '业务逻辑：显示订单的唯一标识符'
    ]
  }
];
SignOfHtml.addTooltips(tooltips);
```

### 示例3：自定义配置
```javascript
// 自定义配置
const options = {
  markerSize: 32,
  markerColor: '#4D79FF',
  markerTextColor: '#FFFFFF',
  tooltipWidth: 350
};

const elements = document.querySelectorAll('.form-label');
SignOfHtml.addFeatureMarkers(elements, options);
```

## 配置选项
| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| markerSize | number | 28 | 标记大小（像素） |
| markerColor | string | '#F52E2E' | 标记背景颜色 |
| markerTextColor | string | '#FFFFFF' | 标记文本颜色 |
| tooltipWidth | number | 320 | 提示框最大宽度（像素） |
| tooltipBackgroundColor | string | 'rgba(44, 48, 56, 0.95)' | 提示框背景颜色 |
| tooltipTextColor | string | '#FFFFFF' | 提示框文本颜色 |
| tooltipTitleColor | string | '#F52E2E' | 提示框标题颜色 |

## 注意事项
1. 确保被标记的元素具有足够的左侧空间，以便标记能够正常显示
2. 工具提示需要与标记的data-feature属性对应
3. 对于复杂页面，建议在DOM加载完成后再调用标记函数

## 适用场景
- 产品需求文档（PRD）的页面标记
- 开发文档的功能点标记
- 页面原型的交互点标记
- 任何需要为HTML元素添加序号标记的场景

## 版本信息
- 版本：1.0.0
- 发布日期：2026-04-27
- 作者：TCL光伏团队
