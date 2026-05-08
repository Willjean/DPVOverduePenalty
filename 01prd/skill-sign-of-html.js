/**
 * sign of html - 为HTML页面添加序号标记
 * 功能：为HTML页面的元素添加序号标记，确保标记在页面滚动时保持在正确位置
 * 作者：TCL光伏团队
 * 日期：2026-04-27
 */

// 主函数：为页面添加序号标记
function addFeatureMarkers(pageElements, options) {
  // 默认配置
  const defaultOptions = {
    markerSize: 28,
    markerColor: '#F52E2E',
    markerTextColor: '#FFFFFF',
    tooltipWidth: 320,
    tooltipBackgroundColor: 'rgba(44, 48, 56, 0.95)',
    tooltipTextColor: '#FFFFFF',
    tooltipTitleColor: '#F52E2E'
  };
  
  // 合并配置
  const config = { ...defaultOptions, ...options };
  
  // 添加样式
  addStyles(config);
  
  // 为每个元素添加标记
  pageElements.forEach((element, index) => {
    addMarker(element, index + 1, config);
  });
  
  // 添加交互事件
  addInteractions();
}

// 添加样式
function addStyles(config) {
  const style = document.createElement('style');
  style.textContent = `
    /* 序号标记样式 */
    .feature-container {
      position: relative;
    }
    
    .feature-marker {
      position: absolute;
      width: ${config.markerSize}px;
      height: ${config.markerSize}px;
      background-color: ${config.markerColor};
      color: ${config.markerTextColor};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      font-size: 14px;
    }
    
    .feature-marker:hover {
      transform: scale(1.1);
    }
    
    .feature-tooltip {
      position: fixed;
      background-color: ${config.tooltipBackgroundColor};
      color: ${config.tooltipTextColor};
      padding: 16px;
      border-radius: 8px;
      z-index: 1001;
      max-width: ${config.tooltipWidth}px;
      font-size: 14px;
      display: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .feature-tooltip h4 {
      color: ${config.tooltipTitleColor};
      margin-bottom: 8px;
      font-size: 14px;
    }
    
    .feature-tooltip p {
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 4px;
    }
  `;
  document.head.appendChild(style);
}

// 为元素添加标记
function addMarker(element, featureId, config) {
  // 创建容器
  const container = document.createElement('div');
  container.className = 'feature-container';
  
  // 创建标记
  const marker = document.createElement('div');
  marker.className = 'feature-marker';
  marker.setAttribute('data-feature', featureId);
  marker.textContent = featureId;
  
  // 设置标记位置
  marker.style.top = '0';
  marker.style.left = '-40px';
  
  // 保存原始内容
  const originalContent = element.innerHTML;
  
  // 替换元素内容
  element.innerHTML = '';
  element.appendChild(container);
  container.appendChild(marker);
  container.innerHTML += originalContent;
}

// 添加交互事件
function addInteractions() {
  const markers = document.querySelectorAll('.feature-marker');
  
  markers.forEach(marker => {
    marker.addEventListener('mouseenter', function() {
      const featureId = this.getAttribute('data-feature');
      const tooltip = document.getElementById(`tooltip-${featureId}`);
      
      if (tooltip) {
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom + 10}px`;
        tooltip.style.display = 'block';
      }
    });
    
    marker.addEventListener('mouseleave', function() {
      const featureId = this.getAttribute('data-feature');
      const tooltip = document.getElementById(`tooltip-${featureId}`);
      
      if (tooltip) {
        tooltip.style.display = 'none';
      }
    });
  });
}

// 添加工具提示
function addTooltips(tooltips) {
  tooltips.forEach((tooltip, index) => {
    const featureId = index + 1;
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'feature-tooltip';
    tooltipElement.id = `tooltip-${featureId}`;
    tooltipElement.innerHTML = `
      <h4>功能点 ${featureId}: ${tooltip.title}</h4>
      ${tooltip.content.map(p => `<p>${p}</p>`).join('')}
    `;
    document.body.appendChild(tooltipElement);
  });
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addFeatureMarkers,
    addTooltips
  };
} else if (typeof window !== 'undefined') {
  window.SignOfHtml = {
    addFeatureMarkers,
    addTooltips
  };
}

// 使用示例
/*
// 示例1：为页面元素添加标记
const elements = document.querySelectorAll('.form-label');
elements.forEach((element, index) => {
  addMarker(element, index + 1);
});

// 示例2：添加工具提示
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
addTooltips(tooltips);
*/
