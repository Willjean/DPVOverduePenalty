## 一、需求背景
根据对HTML文件的分析，该系统是一个用于管理业务流程的Web应用。通过配置规则、管理订单和处理超期情况，实现业务流程的规范化管理。本系统旨在提高工作效率，减少人工操作错误，实现业务流程的自动化和标准化。

## 二、需求价值
通过系统化的规则配置和订单管理，实现业务流程的标准化和自动化，提高工作效率，减少错误率，降低运营成本。

## 三、需求功能点
| 系统 | 一级菜单 | 二级菜单 | 页面名称 | 功能点 | 对应角色 | 添加日期 |
| --- | --- | --- | --- | --- | --- | --- |
| 数字平台 | 超期管理 | 规则设置 | 超期策略管理 | 规则查询 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 规则设置 | 超期策略管理 | 规则编辑 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 规则设置 | 策略配置 | 策略保存 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 规则设置 | 编辑策略 | 策略编辑保存 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 自动超期记录 | 自动超期记录 | 订单查询 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 自动超期记录 | 自动超期记录 | 审批记录查看 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 自动超期记录 | 自动超期记录 | 超期详情查看 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 审批列表 | 审批列表 | 审批记录查询 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 审批列表 | 审批列表 | 审批操作 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 审批列表 | 审批详情 | 审批详情查看 | 运营管理员 | 2026-04-24 |
| 数字平台 | 超期管理 | 审批列表 | 豁免审批 | 豁免审批操作 | 运营管理员 | 2026-04-24 |
| 开放平台 | 超期管理 | 自动超期记录 | 自动超期记录 | 订单查询 | 代理商 | 2026-04-24 |
| 开放平台 | 超期管理 | 自动超期记录 | 自动超期记录 | 申请豁免 | 代理商 | 2026-04-24 |
| 开放平台 | 超期管理 | 自动超期记录 | 发起豁免申请 | 豁免申请提交 | 代理商 | 2026-04-24 |

## 四、需求描述

### 4.1 开放平台 - 自动超期记录
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/order_overdue_agent.html</td>
    <td>订单编号查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入订单编号，点击查询按钮，系统根据订单编号查询超期记录<br>
      <strong>字段规则：</strong>订单编号为必填字段，支持精确匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/order_overdue_agent.html</td>
    <td>客户姓名查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入客户姓名，点击查询按钮，系统根据客户姓名查询超期记录<br>
      <strong>字段规则：</strong>客户姓名为可选字段，支持模糊匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/order_overdue_agent.html</td>
    <td>查询按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查询按钮，系统根据输入的查询条件筛选超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/order_overdue_agent.html</td>
    <td>重置按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击重置按钮，系统清空所有查询条件<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/order_overdue_agent.html</td>
    <td>申请豁免按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击申请豁免按钮，系统跳转到豁免申请页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/order_overdue_agent.html</td>
    <td>查看审批记录按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查看审批记录按钮，系统显示该订单的审批记录详情<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/order_overdue_agent.html</td>
    <td>查看详情按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查看详情按钮，系统显示该订单的超期详情<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/order_overdue_agent.html</td>
    <td>订单编号字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的唯一标识符<br>
      <strong>字段规则：</strong>必填字段，唯一标识
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/order_overdue_agent.html</td>
    <td>客户姓名字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单对应的客户姓名<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/order_overdue_agent.html</td>
    <td>安装地区字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的安装地区<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>11</td>
    <td>/order_overdue_agent.html</td>
    <td>产品字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的产品信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>12</td>
    <td>/order_overdue_agent.html</td>
    <td>并网时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的并网时间<br>
      <strong>字段规则：</strong>必填字段，日期格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>13</td>
    <td>/order_overdue_agent.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>14</td>
    <td>/order_overdue_agent.html</td>
    <td>当前状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的当前状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.2 开放平台 - 发起豁免申请
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/submit_exemption.html</td>
    <td>返回按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击返回按钮，系统返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/submit_exemption.html</td>
    <td>订单编号字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前申请豁免的订单编号<br>
      <strong>字段规则：</strong>必填字段，唯一标识
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/submit_exemption.html</td>
    <td>代理商字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前申请豁免的代理商信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/submit_exemption.html</td>
    <td>客户姓名字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前申请豁免的客户姓名<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/submit_exemption.html</td>
    <td>安装地区字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前申请豁免的安装地区<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/submit_exemption.html</td>
    <td>产品字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前申请豁免的产品信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/submit_exemption.html</td>
    <td>订单状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前申请豁免的订单状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/submit_exemption.html</td>
    <td>豁免梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前申请豁免的梯度信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/submit_exemption.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前申请豁免的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/submit_exemption.html</td>
    <td>申请原因字段</td>
    <td>
      <strong>业务逻辑：</strong>用户输入申请豁免的原因<br>
      <strong>字段规则：</strong>必填字段，多行文本，最大长度500字
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>11</td>
    <td>/submit_exemption.html</td>
    <td>附件上传字段</td>
    <td>
      <strong>业务逻辑：</strong>用户上传支持豁免申请的附件<br>
      <strong>字段规则：</strong>可选字段，支持图片和PDF格式，最大文件大小5MB
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>12</td>
    <td>/submit_exemption.html</td>
    <td>提交按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击提交按钮，系统提交豁免申请<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.3 数字平台 - 审批详情
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/approval_detail.html</td>
    <td>返回按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击返回按钮，系统返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/approval_detail.html</td>
    <td>订单编号字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的订单编号<br>
      <strong>字段规则：</strong>必填字段，唯一标识
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/approval_detail.html</td>
    <td>代理商字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的代理商信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/approval_detail.html</td>
    <td>客户姓名字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的客户姓名<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/approval_detail.html</td>
    <td>安装地区字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的安装地区<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/approval_detail.html</td>
    <td>产品字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的产品信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/approval_detail.html</td>
    <td>订单状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的订单状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/approval_detail.html</td>
    <td>豁免梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的豁免梯度信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/approval_detail.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/approval_detail.html</td>
    <td>申请原因字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的豁免申请原因<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>11</td>
    <td>/approval_detail.html</td>
    <td>发起时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的发起时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>12</td>
    <td>/approval_detail.html</td>
    <td>审核结果字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的审核结果<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>13</td>
    <td>/approval_detail.html</td>
    <td>审核时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的审核时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>14</td>
    <td>/approval_detail.html</td>
    <td>并网超期开始时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示当前审批的并网超期开始时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>15</td>
    <td>/approval_detail.html</td>
    <td>梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度信息表格中的梯度字段<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>16</td>
    <td>/approval_detail.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度信息表格中的超期天数字段<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>17</td>
    <td>/approval_detail.html</td>
    <td>惩罚动作字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度信息表格中的惩罚动作字段<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>18</td>
    <td>/approval_detail.html</td>
    <td>降价幅度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度信息表格中的降价幅度字段<br>
      <strong>字段规则：</strong>必填字段，百分比类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>19</td>
    <td>/approval_detail.html</td>
    <td>梯度生效时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度信息表格中的梯度生效时间字段<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.4 数字平台 - 编辑策略
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/编辑策略.html</td>
    <td>适用省份字段</td>
    <td>
      <strong>业务逻辑：</strong>用户选择策略适用的省份<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：全国、河南省、河北省、山西省
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/编辑策略.html</td>
    <td>启用生效时间字段</td>
    <td>
      <strong>业务逻辑：</strong>用户设置策略的启用生效时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/编辑策略.html</td>
    <td>添加梯度按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击添加梯度按钮，系统添加一个新的梯度配置行<br>
      <strong>字段规则：</strong>最多可添加10个梯度
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/编辑策略.html</td>
    <td>梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度编号<br>
      <strong>字段规则：</strong>自动生成，从1开始递增
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/编辑策略.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>用户设置每个梯度的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型，必须大于0，且每个梯度的超期天数必须大于前一个梯度
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/编辑策略.html</td>
    <td>惩罚动作字段</td>
    <td>
      <strong>业务逻辑：</strong>用户选择每个梯度的惩罚动作<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：降价、回购
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/编辑策略.html</td>
    <td>降价幅度字段</td>
    <td>
      <strong>业务逻辑：</strong>用户设置每个梯度的降价幅度<br>
      <strong>字段规则：</strong>当惩罚动作为降价时必填，数字类型，单位为元/W，最小为0
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/编辑策略.html</td>
    <td>删除梯度按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击删除梯度按钮，系统删除对应的梯度配置行<br>
      <strong>字段规则：</strong>至少保留1个梯度
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/编辑策略.html</td>
    <td>取消按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击取消按钮，系统放弃当前编辑，返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/编辑策略.html</td>
    <td>保存按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击保存按钮，系统验证表单并保存策略配置<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.5 数字平台 - 超期详情
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/超期详情.html</td>
    <td>返回按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击返回按钮，系统返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/超期详情.html</td>
    <td>平台编号字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的平台编号<br>
      <strong>字段规则：</strong>必填字段，唯一标识
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/超期详情.html</td>
    <td>产品字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的产品信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/超期详情.html</td>
    <td>客户姓名字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的客户姓名<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/超期详情.html</td>
    <td>安装地区字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的安装地区<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/超期详情.html</td>
    <td>订单状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的当前状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/超期详情.html</td>
    <td>实际安装量字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的实际安装量<br>
      <strong>字段规则：</strong>必填字段，数字类型，单位为K
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/超期详情.html</td>
    <td>梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示惩罚计划中的梯度编号<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/超期详情.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示惩罚计划中的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/超期详情.html</td>
    <td>惩罚动作字段</td>
    <td>
      <strong>业务逻辑：</strong>显示惩罚计划中的惩罚动作<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：降价、回购
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>11</td>
    <td>/超期详情.html</td>
    <td>梯度(元/W)字段</td>
    <td>
      <strong>业务逻辑：</strong>显示惩罚计划中的梯度降价幅度<br>
      <strong>字段规则：</strong>当惩罚动作为降价时必填，数字类型，单位为元/W
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>12</td>
    <td>/超期详情.html</td>
    <td>状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示惩罚计划中每个梯度的状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：已生效、未生效
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.6 数字平台 - 审批列表
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/approval_list.html</td>
    <td>返回按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击返回按钮，系统返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/approval_list.html</td>
    <td>订单编号查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入订单编号，点击查询按钮，系统根据订单编号筛选审批记录<br>
      <strong>字段规则：</strong>可选字段，支持精确匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/approval_list.html</td>
    <td>代理商查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入代理商名称，点击查询按钮，系统根据代理商名称筛选审批记录<br>
      <strong>字段规则：</strong>可选字段，支持模糊匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/approval_list.html</td>
    <td>审核状态查询</td>
    <td>
      <strong>业务逻辑：</strong>用户选择审核状态，点击查询按钮，系统根据审核状态筛选审批记录<br>
      <strong>字段规则：</strong>可选字段，枚举类型，选项包括：全部、待审核、已通过、已拒绝
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/approval_list.html</td>
    <td>查询按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查询按钮，系统根据输入的查询条件筛选审批记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/approval_list.html</td>
    <td>重置按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击重置按钮，系统清空所有查询条件<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/approval_list.html</td>
    <td>全部Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击全部Tab，系统显示所有审批记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/approval_list.html</td>
    <td>待审核Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击待审核Tab，系统显示待审核的审批记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/approval_list.html</td>
    <td>已通过Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击已通过Tab，系统显示已通过的审批记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/approval_list.html</td>
    <td>已拒绝Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击已拒绝Tab，系统显示已拒绝的审批记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>11</td>
    <td>/approval_list.html</td>
    <td>审批记录编号字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录的唯一标识符<br>
      <strong>字段规则：</strong>必填字段，唯一标识
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>12</td>
    <td>/approval_list.html</td>
    <td>订单编号字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录对应的订单编号<br>
      <strong>字段规则：</strong>必填字段，唯一标识
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>13</td>
    <td>/approval_list.html</td>
    <td>代理商字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录对应的代理商信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>14</td>
    <td>/approval_list.html</td>
    <td>安装地区字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录对应的安装地区<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>15</td>
    <td>/approval_list.html</td>
    <td>并网超期开始时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录对应的并网超期开始时间<br>
      <strong>字段规则：</strong>必填字段，日期格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>16</td>
    <td>/approval_list.html</td>
    <td>豁免梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录对应的豁免梯度<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>17</td>
    <td>/approval_list.html</td>
    <td>合计豁免金额字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录对应的合计豁免金额<br>
      <strong>字段规则：</strong>必填字段，数字类型，单位为元/W
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>18</td>
    <td>/approval_list.html</td>
    <td>审核结果字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录的审核结果<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：待审核、已通过、已拒绝
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>19</td>
    <td>/approval_list.html</td>
    <td>发起时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录的发起时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>20</td>
    <td>/approval_list.html</td>
    <td>审核时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示审批记录的审核时间<br>
      <strong>字段规则：</strong>当审核结果为已通过或已拒绝时必填，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>21</td>
    <td>/approval_list.html</td>
    <td>审批按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击审批按钮，系统跳转到审批页面<br>
      <strong>字段规则：</strong>仅当审核结果为待审核时显示
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>22</td>
    <td>/approval_list.html</td>
    <td>查看详情按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查看详情按钮，系统跳转到审批详情页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>23</td>
    <td>/approval_list.html</td>
    <td>分页控件</td>
    <td>
      <strong>业务逻辑：</strong>用户点击分页控件，系统显示不同页的审批记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.7 数字平台 - 豁免审批
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/approve_exemption.html</td>
    <td>返回按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击返回按钮，系统返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/approve_exemption.html</td>
    <td>订单编号字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的唯一标识符<br>
      <strong>字段规则：</strong>必填字段，唯一标识
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/approve_exemption.html</td>
    <td>代理商字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的代理商信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/approve_exemption.html</td>
    <td>装机容量字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的装机容量<br>
      <strong>字段规则：</strong>必填字段，数字类型，单位为kW
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/approve_exemption.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/approve_exemption.html</td>
    <td>当前梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的当前梯度<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/approve_exemption.html</td>
    <td>申请时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示豁免申请的发起时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/approve_exemption.html</td>
    <td>申请豁免梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示申请豁免的梯度<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：梯度1 - 0.00元/W、梯度2 - 0.01元/W、梯度3 - 0.02元/W、梯度4 - 0.03元/W、梯度5 - 0.04元/W
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/approve_exemption.html</td>
    <td>申请原因字段</td>
    <td>
      <strong>业务逻辑：</strong>显示申请豁免的原因<br>
      <strong>字段规则：</strong>必填字段，多行文本
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/approve_exemption.html</td>
    <td>审批意见字段</td>
    <td>
      <strong>业务逻辑：</strong>用户输入审批意见<br>
      <strong>字段规则：</strong>必填字段，多行文本
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>11</td>
    <td>/approve_exemption.html</td>
    <td>驳回按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击驳回按钮，系统驳回豁免申请<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>12</td>
    <td>/approve_exemption.html</td>
    <td>批准按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击批准按钮，系统批准豁免申请<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.8 数字平台 - 自动超期记录
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/auto_overdue.html</td>
    <td>订单编号查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入订单编号，点击查询按钮，系统根据订单编号筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，支持精确匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/auto_overdue.html</td>
    <td>代理商查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入代理商名称，点击查询按钮，系统根据代理商名称筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，支持模糊匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/auto_overdue.html</td>
    <td>代理团队查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入代理团队名称，点击查询按钮，系统根据代理团队名称筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，支持模糊匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/auto_overdue.html</td>
    <td>安装地区查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入安装地区，点击查询按钮，系统根据安装地区筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，支持模糊匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/auto_overdue.html</td>
    <td>产品查询</td>
    <td>
      <strong>业务逻辑：</strong>用户选择产品，点击查询按钮，系统根据产品筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，枚举类型，选项包括：全部、光耀宝、光瑞宝
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/auto_overdue.html</td>
    <td>客户姓名查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入客户姓名，点击查询按钮，系统根据客户姓名筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，支持模糊匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/auto_overdue.html</td>
    <td>订单状态查询</td>
    <td>
      <strong>业务逻辑：</strong>用户选择订单状态，点击查询按钮，系统根据订单状态筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，枚举类型，选项包括：全部、待审批、延期并网中、豁免并网中、待回购、回购中、已并网、已回购、已取消
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/auto_overdue.html</td>
    <td>组件规格查询</td>
    <td>
      <strong>业务逻辑：</strong>用户输入组件规格，点击查询按钮，系统根据组件规格筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，支持模糊匹配
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/auto_overdue.html</td>
    <td>电站设计方案查询</td>
    <td>
      <strong>业务逻辑：</strong>用户选择电站设计方案，点击查询按钮，系统根据电站设计方案筛选超期记录<br>
      <strong>字段规则：</strong>可选字段，枚举类型，选项包括：全部、庭院房、阳光房
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/auto_overdue.html</td>
    <td>查询按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查询按钮，系统根据输入的查询条件筛选超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>11</td>
    <td>/auto_overdue.html</td>
    <td>重置按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击重置按钮，系统清空所有查询条件<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>12</td>
    <td>/auto_overdue.html</td>
    <td>全部Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击全部Tab，系统显示所有超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>13</td>
    <td>/auto_overdue.html</td>
    <td>延期并网中Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击延期并网中Tab，系统显示延期并网中的超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>14</td>
    <td>/auto_overdue.html</td>
    <td>已并网Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击已并网Tab，系统显示已并网的超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>15</td>
    <td>/auto_overdue.html</td>
    <td>待回购Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击待回购Tab，系统显示待回购的超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>16</td>
    <td>/auto_overdue.html</td>
    <td>回购中Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击回购中Tab，系统显示回购中的超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>17</td>
    <td>/auto_overdue.html</td>
    <td>已回购Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击已回购Tab，系统显示已回购的超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>18</td>
    <td>/auto_overdue.html</td>
    <td>已取消Tab</td>
    <td>
      <strong>业务逻辑：</strong>用户点击已取消Tab，系统显示已取消的超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>19</td>
    <td>/auto_overdue.html</td>
    <td>订单编号字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的唯一标识符<br>
      <strong>字段规则：</strong>必填字段，唯一标识
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>20</td>
    <td>/auto_overdue.html</td>
    <td>代理商字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的代理商信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>21</td>
    <td>/auto_overdue.html</td>
    <td>代理团队字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的代理团队信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>22</td>
    <td>/auto_overdue.html</td>
    <td>安装地区字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的安装地区<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>23</td>
    <td>/auto_overdue.html</td>
    <td>产品字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的产品信息<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>24</td>
    <td>/auto_overdue.html</td>
    <td>客户姓名字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的客户姓名<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>25</td>
    <td>/auto_overdue.html</td>
    <td>订单状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的当前状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>26</td>
    <td>/auto_overdue.html</td>
    <td>装机容量字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的装机容量<br>
      <strong>字段规则：</strong>必填字段，数字类型，单位为kW
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>27</td>
    <td>/auto_overdue.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>28</td>
    <td>/auto_overdue.html</td>
    <td>惩罚梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的惩罚梯度<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>29</td>
    <td>/auto_overdue.html</td>
    <td>组件规格字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的组件规格<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>30</td>
    <td>/auto_overdue.html</td>
    <td>组件总数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的组件总数<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>31</td>
    <td>/auto_overdue.html</td>
    <td>电站设计方案字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的电站设计方案<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>32</td>
    <td>/auto_overdue.html</td>
    <td>原订单工程款单价字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的原工程款单价<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>33</td>
    <td>/auto_overdue.html</td>
    <td>并网超期开始时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的并网超期开始时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>34</td>
    <td>/auto_overdue.html</td>
    <td>并网时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的并网时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>35</td>
    <td>/auto_overdue.html</td>
    <td>累计应降价幅度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的累计应降价幅度<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>36</td>
    <td>/auto_overdue.html</td>
    <td>实际降价幅度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的实际降价幅度<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>37</td>
    <td>/auto_overdue.html</td>
    <td>状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示订单的状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>38</td>
    <td>/auto_overdue.html</td>
    <td>审批记录按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击审批记录按钮，系统跳转到审批记录页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>39</td>
    <td>/auto_overdue.html</td>
    <td>超期详情按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击超期详情按钮，系统跳转到超期详情页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>40</td>
    <td>/auto_overdue.html</td>
    <td>详情按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击详情按钮，系统显示订单详情<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>41</td>
    <td>/auto_overdue.html</td>
    <td>分页控件</td>
    <td>
      <strong>业务逻辑：</strong>用户点击分页控件，系统显示不同页的超期记录<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.9 数字平台 - 删除确认
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/delete_modal.html</td>
    <td>再看看按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击再看看按钮，系统返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/delete_modal.html</td>
    <td>确认删除按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击确认删除按钮，系统删除对应的策略<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.10 数字平台 - 操作明细
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/detail_modal.html</td>
    <td>返回按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击返回按钮，系统返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/detail_modal.html</td>
    <td>操作时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示操作的时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/detail_modal.html</td>
    <td>操作人字段</td>
    <td>
      <strong>业务逻辑：</strong>显示操作的执行人员<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/detail_modal.html</td>
    <td>操作类型字段</td>
    <td>
      <strong>业务逻辑：</strong>显示操作的类型<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/detail_modal.html</td>
    <td>适用范围字段</td>
    <td>
      <strong>业务逻辑：</strong>显示操作的适用范围<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/detail_modal.html</td>
    <td>梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度惩罚明细中的梯度编号<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/detail_modal.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度惩罚明细中的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/detail_modal.html</td>
    <td>惩罚动作字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度惩罚明细中的惩罚动作<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/detail_modal.html</td>
    <td>降幅字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度惩罚明细中的降幅<br>
      <strong>字段规则：</strong>当惩罚动作为降价时必填，数字类型，单位为元/W
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.11 数字平台 - 策略配置
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/index.html</td>
    <td>适用省份字段</td>
    <td>
      <strong>业务逻辑：</strong>用户选择策略适用的省份<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：全国、河南省、河北省、山西省
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/index.html</td>
    <td>启用生效时间字段</td>
    <td>
      <strong>业务逻辑：</strong>用户设置策略的启用生效时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/index.html</td>
    <td>添加梯度按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击添加梯度按钮，系统添加一个新的梯度配置行<br>
      <strong>字段规则：</strong>最多可添加10个梯度
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/index.html</td>
    <td>梯度字段</td>
    <td>
      <strong>业务逻辑：</strong>显示梯度编号<br>
      <strong>字段规则：</strong>自动生成，从1开始递增
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/index.html</td>
    <td>超期天数字段</td>
    <td>
      <strong>业务逻辑：</strong>用户设置每个梯度的超期天数<br>
      <strong>字段规则：</strong>必填字段，数字类型，必须大于0，且每个梯度的超期天数必须大于前一个梯度
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/index.html</td>
    <td>惩罚动作字段</td>
    <td>
      <strong>业务逻辑：</strong>用户选择每个梯度的惩罚动作<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：降价、回购
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/index.html</td>
    <td>降价幅度字段</td>
    <td>
      <strong>业务逻辑：</strong>用户设置每个梯度的降价幅度<br>
      <strong>字段规则：</strong>当惩罚动作为降价时必填，数字类型，单位为元/W，最小为0
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/index.html</td>
    <td>删除梯度按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击删除梯度按钮，系统删除对应的梯度配置行<br>
      <strong>字段规则：</strong>至少保留1个梯度
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/index.html</td>
    <td>取消按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击取消按钮，系统放弃当前编辑，返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/index.html</td>
    <td>保存按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击保存按钮，系统验证表单并保存策略配置<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.12 数字平台 - 超期策略管理
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/list.html</td>
    <td>新增策略按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击新增策略按钮，系统跳转到策略配置页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/list.html</td>
    <td>区域查询</td>
    <td>
      <strong>业务逻辑：</strong>用户选择区域，点击查询按钮，系统根据区域筛选策略<br>
      <strong>字段规则：</strong>可选字段，支持多选
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/list.html</td>
    <td>状态查询</td>
    <td>
      <strong>业务逻辑：</strong>用户选择状态，点击查询按钮，系统根据状态筛选策略<br>
      <strong>字段规则：</strong>可选字段，枚举类型，选项包括：全部、启用、禁用
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/list.html</td>
    <td>查询按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查询按钮，系统根据输入的查询条件筛选策略<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/list.html</td>
    <td>重置按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击重置按钮，系统清空所有查询条件<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/list.html</td>
    <td>适用范围字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的适用范围<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/list.html</td>
    <td>梯度1字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的梯度1配置<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/list.html</td>
    <td>梯度2字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的梯度2配置<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/list.html</td>
    <td>梯度3字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的梯度3配置<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>10</td>
    <td>/list.html</td>
    <td>梯度4字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的梯度4配置<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>11</td>
    <td>/list.html</td>
    <td>梯度5字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的梯度5配置<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>12</td>
    <td>/list.html</td>
    <td>状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型，选项包括：启用、禁用
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>13</td>
    <td>/list.html</td>
    <td>操作时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的操作时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>14</td>
    <td>/list.html</td>
    <td>启用生效时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的启用生效时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>15</td>
    <td>/list.html</td>
    <td>编辑按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击编辑按钮，系统跳转到编辑策略页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>16</td>
    <td>/list.html</td>
    <td>日志按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击日志按钮，系统跳转到操作日志页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>17</td>
    <td>/list.html</td>
    <td>删除按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击删除按钮，系统跳转到删除确认页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>18</td>
    <td>/list.html</td>
    <td>状态开关</td>
    <td>
      <strong>业务逻辑：</strong>用户点击状态开关，系统切换策略的启用/禁用状态<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>19</td>
    <td>/list.html</td>
    <td>分页控件</td>
    <td>
      <strong>业务逻辑：</strong>用户点击分页控件，系统显示不同页的策略<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>

### 4.13 数字平台 - 操作日志
<table border="1">
  <tr>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">示例图</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">序号</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">页面路径</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能点</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">功能描述</th>
    <th style="background-color: #4CAF50; color: white; font-weight: bold;">添加日期</th>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>1</td>
    <td>/log_modal.html</td>
    <td>返回按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击返回按钮，系统返回上一页<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/log_modal.html</td>
    <td>适用范围字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的适用范围<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/log_modal.html</td>
    <td>当前状态字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的当前状态<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/log_modal.html</td>
    <td>启用生效时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示策略的启用生效时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/log_modal.html</td>
    <td>操作时间字段</td>
    <td>
      <strong>业务逻辑：</strong>显示操作的时间<br>
      <strong>字段规则：</strong>必填字段，日期时间格式
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/log_modal.html</td>
    <td>操作人字段</td>
    <td>
      <strong>业务逻辑：</strong>显示操作的执行人员<br>
      <strong>字段规则：</strong>必填字段
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>7</td>
    <td>/log_modal.html</td>
    <td>操作类型字段</td>
    <td>
      <strong>业务逻辑：</strong>显示操作的类型<br>
      <strong>字段规则：</strong>必填字段，枚举类型
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>8</td>
    <td>/log_modal.html</td>
    <td>查看明细按钮</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查看明细按钮，系统跳转到操作明细页面<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>9</td>
    <td>/log_modal.html</td>
    <td>分页控件</td>
    <td>
      <strong>业务逻辑：</strong>用户点击分页控件，系统显示不同页的操作日志<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-24</td>
  </tr>
</table>