
/**
 * 数字平台 - 侧边栏组件渲染
 */

function initSidebar(activeItem, currentDir) {
    var sidebarContainer = document.getElementById('sidebar');
    if (!sidebarContainer) {
        console.error('Sidebar container not found');
        return;
    }
    
    // 获取当前页面的路径深度
    var currentPath = window.location.pathname;
    var pathDepth = (currentPath.match(/\//g) || []).length;
    var basePath = '';
    
    // 根据路径深度计算基础路径
    // 假设数字平台根目录在 /数字平台/ 下
    if (currentPath.includes('超期策略管理')) {
        basePath = '../';
    } else if (currentPath.includes('并网超期订单')) {
        basePath = '../';
    } else if (currentPath.includes('申诉审核记录')) {
        basePath = '../';
    } else if (currentPath.includes('申诉原因管理')) {
        basePath = '../';
    } else {
        basePath = './';
    }
    
    var strategyPath = '';
    var autoPath = '';
    var approvalPath = '';
    var categoryPath = '';
    
    // 根据当前目录类型设置路径
    if (currentDir === 'strategy') {
        // 策略管理目录
        strategyPath = './list.html';
        autoPath = '../并网超期订单/auto_overdue.html';
        approvalPath = '../申诉审核记录/approval_list.html';
        categoryPath = '../申诉原因管理/申诉原因创建.html';
    } else if (currentDir === 'auto') {
        // 超期订单目录
        strategyPath = '../超期策略管理/list.html';
        autoPath = './auto_overdue.html';
        approvalPath = '../申诉审核记录/approval_list.html';
        categoryPath = '../申诉原因管理/申诉原因创建.html';
    } else if (currentDir === 'approval') {
        // 申诉审核记录目录
        strategyPath = '../超期策略管理/list.html';
        autoPath = '../并网超期订单/auto_overdue.html';
        approvalPath = './approval_list.html';
        categoryPath = '../申诉原因管理/申诉原因创建.html';
    } else if (currentDir === 'category') {
        // 申诉原因管理目录
        strategyPath = '../超期策略管理/list.html';
        autoPath = '../并网超期订单/auto_overdue.html';
        approvalPath = '../申诉审核记录/approval_list.html';
        categoryPath = './申诉原因创建.html';
    } else {
        // 默认路径（从编辑策略等页面）
        strategyPath = './list.html';
        autoPath = '../并网超期订单/auto_overdue.html';
        approvalPath = '../申诉审核记录/approval_list.html';
        categoryPath = '../申诉原因管理/申诉原因创建.html';
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
        '<a href="#" class="side-menu-sublink">并网超期管理</a>' +
        '<ul class="side-menu-submenu" style="display: block;">' +
        '<li class="side-menu-subitem ' + autoActive + '"><a href="' + autoPath + '" class="side-menu-sublink">并网超期订单</a></li>' +
        '<li class="side-menu-subitem ' + approvalActive + '"><a href="' + approvalPath + '" class="side-menu-sublink">申诉审核记录</a></li>' +
        '<li class="side-menu-subitem ' + strategyActive + '"><a href="' + strategyPath + '" class="side-menu-sublink">超期策略管理</a></li>' +
        '<li class="side-menu-subitem ' + categoryActive + '"><a href="' + categoryPath + '" class="side-menu-sublink">申诉原因管理</a></li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>';
    
    sidebarContainer.innerHTML = html;
    console.log('Sidebar initialized successfully with:', {
        activeItem: activeItem,
        currentDir: currentDir,
        path: currentPath,
        paths: {
            strategy: strategyPath,
            auto: autoPath,
            approval: approvalPath,
            category: categoryPath
        }
    });
}
