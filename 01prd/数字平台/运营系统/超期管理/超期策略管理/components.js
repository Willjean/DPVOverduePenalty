
/**
 * 数字平台 - 侧边栏组件渲染
 */

function initSidebar(activeItem, currentDir) {
    var sidebarContainer = document.getElementById('sidebar');
    if (!sidebarContainer) {
        console.error('Sidebar container not found');
        return;
    }
    
    var strategyPath = '';
    var autoPath = '';
    var approvalPath = '';
    var categoryPath = '';
    
    if (currentDir === 'approval') {
        strategyPath = '../超期管理/超期策略管理/list.html';
        autoPath = '../超期管理/并网超期记录/auto_overdue.html';
        approvalPath = './approval_list.html';
        categoryPath = '../超期管理/申诉分类管理/申诉分类创建.html';
    } else {
        strategyPath = (currentDir === 'strategy') ? './list.html' : '../超期策略管理/list.html';
        autoPath = (currentDir === 'auto') ? './auto_overdue.html' : '../并网超期记录/auto_overdue.html';
        approvalPath = '../../申诉审核记录/approval_list.html';
        categoryPath = (currentDir === 'category') ? './申诉分类创建.html' : '../申诉分类管理/申诉分类创建.html';
    }
    
    var strategyActive = (activeItem === 'strategy_list') ? 'active' : '';
    var autoActive = (activeItem === 'auto_overdue') ? 'active' : '';
    var approvalActive = (activeItem === 'approval_list') ? 'active' : '';
    var categoryActive = (activeItem === 'category_list') ? 'active' : '';
    
    var html = '<div class="side-menu-container">' +
        '<div class="side-menu">' +
        '<div class="side-menu-header">' +
        '<h4 class="side-menu-title">业务管理</h4>' +
        '</div>' +
        '<ul class="side-menu-list">' +
        '<li class="side-menu-item">' +
        '<a href="#" class="side-menu-link">运营系统 <i class="fa fa-angle-right side-menu-arrow"></i></a>' +
        '<ul class="side-menu-submenu" style="display: block;">' +
        '<li class="side-menu-subitem">' +
        '<a href="#" class="side-menu-sublink">超期管理</a>' +
        '<ul class="side-menu-submenu" style="display: block;">' +
        '<li class="side-menu-subitem ' + strategyActive + '"><a href="' + strategyPath + '" class="side-menu-sublink">超期策略管理</a></li>' +
        '<li class="side-menu-subitem ' + autoActive + '"><a href="' + autoPath + '" class="side-menu-sublink">并网超期记录</a></li>' +
        '<li class="side-menu-subitem ' + approvalActive + '"><a href="' + approvalPath + '" class="side-menu-sublink">审批列表</a></li>' +
        '<li class="side-menu-subitem ' + categoryActive + '"><a href="' + categoryPath + '" class="side-menu-sublink">申诉分类管理</a></li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>';
    
    sidebarContainer.innerHTML = html;
    console.log('Sidebar initialized successfully');
}
