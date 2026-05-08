
/**
 * 开放平台 - 侧边栏组件渲染
 */

/**
 * 渲染开放平台侧边栏
 * @param {string} activeItem - 激活的菜单项
 * @param {string} basePath - 基础路径
 * @returns {string} HTML字符串
 */
function renderOpenPlatformSidebar(activeItem = 'order_overdue', basePath = '') {
    return `
    <!-- 侧边菜单 -->
    <div class="side-menu-container">
        <div class="side-menu">
            <div class="side-menu-header">
                <h4 class="side-menu-title">业务管理</h4>
            </div>
            <ul class="side-menu-list">
                <li class="side-menu-item">
                    <a href="#" class="side-menu-link">
                        订单管理
                        <i class="fa fa-angle-right side-menu-arrow"></i>
                    </a>
                    <ul class="side-menu-list pl-4 mt-2">
                        <li class="side-menu-item">
                            <a href="#" class="side-menu-link">
                                超期管理
                                <i class="fa fa-angle-right side-menu-arrow"></i>
                            </a>
                            <ul class="side-menu-list pl-6 mt-2">
                                <li class="side-menu-item ${activeItem === 'overdue_list' ? 'active' : ''}">
                                    <a href="#" class="side-menu-link">
                                        并网超期订单
                                    </a>
                                </li>
                                <li class="side-menu-item ${activeItem === 'order_overdue' ? 'active' : ''}">
                                    <a href="#" class="side-menu-link">
                                        申诉审核记录
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    `;
}

/**
 * 初始化侧边栏
 * @param {string} activeItem - 激活的菜单项
 * @param {string} basePath - 基础路径
 */
function initSidebar(activeItem = 'order_overdue', basePath = '') {
    const sidebarContainer = document.getElementById('sidebar');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = renderOpenPlatformSidebar(activeItem, basePath);
    }
}
