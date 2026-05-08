/**
 * sign of html - 为HTML页面添加序号标记
 * 版本：1.0.0
 * 发布日期：2026-04-27
 * 作者：TCL光伏团队
 */

const SignOfHtml = {
    /**
     * 为页面元素添加序号标记
     * @param {Array} elements - 要添加标记的元素数组
     * @param {Object} options - 配置选项
     */
    addFeatureMarkers: function(elements, options = {}) {
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

        // 为每个元素添加标记
        elements.forEach((element, index) => {
            // 为元素添加feature-container类
            if (!element.classList.contains('feature-container')) {
                element.classList.add('feature-container');
            }

            // 创建标记元素
            const marker = document.createElement('div');
            marker.className = 'feature-marker';
            marker.dataset.feature = index + 1;
            marker.textContent = index + 1;

            // 设置标记样式
            marker.style.width = `${config.markerSize}px`;
            marker.style.height = `${config.markerSize}px`;
            marker.style.backgroundColor = config.markerColor;
            marker.style.color = config.markerTextColor;

            // 添加标记到元素
            element.appendChild(marker);
        });
    },

    /**
     * 添加工具提示
     * @param {Array} tooltips - 工具提示数组
     * @param {Object} options - 配置选项
     */
    addTooltips: function(tooltips, options = {}) {
        // 默认配置
        const defaultOptions = {
            tooltipWidth: 320,
            tooltipBackgroundColor: 'rgba(44, 48, 56, 0.95)',
            tooltipTextColor: '#FFFFFF',
            tooltipTitleColor: '#F52E2E'
        };

        // 合并配置
        const config = { ...defaultOptions, ...options };

        // 为每个工具提示创建元素
        tooltips.forEach((tooltip, index) => {
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'feature-tooltip';
            tooltipElement.id = `tooltip-${index + 1}`;

            // 设置工具提示样式
            tooltipElement.style.maxWidth = `${config.tooltipWidth}px`;
            tooltipElement.style.backgroundColor = config.tooltipBackgroundColor;
            tooltipElement.style.color = config.tooltipTextColor;

            // 填充工具提示内容
            tooltipElement.innerHTML = `<h4 style="color: ${config.tooltipTitleColor};">功能点 ${index + 1}: ${tooltip.title}</h4>`;
            tooltip.content.forEach(line => {
                tooltipElement.innerHTML += `<p>${line}</p>`;
            });

            // 添加工具提示到页面
            document.body.appendChild(tooltipElement);
        });

        // 添加悬停事件
        this.addHoverEvents();
    },

    /**
     * 添加悬停事件
     */
    addHoverEvents: function() {
        const markers = document.querySelectorAll('.feature-marker');
        markers.forEach(marker => {
            marker.addEventListener('mouseenter', function() {
                const feature = this.dataset.feature;
                const tooltip = document.getElementById(`tooltip-${feature}`);
                if (tooltip) {
                    const rect = this.getBoundingClientRect();
                    tooltip.style.left = `${rect.left}px`;
                    tooltip.style.top = `${rect.bottom + 10}px`;
                    tooltip.style.display = 'block';
                }
            });

            marker.addEventListener('mouseleave', function() {
                const feature = this.dataset.feature;
                const tooltip = document.getElementById(`tooltip-${feature}`);
                if (tooltip) {
                    tooltip.style.display = 'none';
                }
            });
        });
    },

    /**
     * 初始化技能
     * @param {Object} config - 配置选项
     */
    init: function(config = {}) {
        console.log('SignOfHtml initialized with config:', config);
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SignOfHtml;
}
