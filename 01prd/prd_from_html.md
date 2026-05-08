# 分布式光伏并网超期惩罚系统 PRD

## 一、需求背景
为规范分布式光伏项目并网流程，确保项目按时完成并网，避免因超期并网带来的经济损失和资源浪费，特开发分布式光伏并网超期惩罚系统。该系统通过配置梯度化的惩罚规则，对超期并网的项目实施相应的惩罚措施，以提高项目并网效率。

## 二、需求价值
通过梯度化的超期惩罚机制，规范分布式光伏项目并网流程，提高并网效率，减少超期并网带来的经济损失。

## 三、需求功能点
| 页面名称 | 功能点 | 对应角色 | 添加日期 |
| --- | --- | --- | --- |
| 规则配置页 | 规则基本信息配置 | 运营管理员 | 2026-04-01 |
| 规则配置页 | 梯度配置管理 | 运营管理员 | 2026-04-01 |
| 规则列表页 | 规则管理（编辑/删除/查看日志） | 运营管理员 | 2026-04-01 |
| 规则列表页 | 区域管理 | 运营管理员 | 2026-04-01 |
| 订单超期记录页 | 订单超期查询 | 运营管理员 | 2026-04-01 |
| 订单超期记录页 | 订单超期处理（延长宽限期/撤销） | 运营管理员 | 2026-04-01 |
| 添加区域模态框 | 区域层级选择 | 运营管理员 | 2026-04-01 |
| 删除规则模态框 | 规则删除确认 | 运营管理员 | 2026-04-01 |
| 操作日志模态框 | 规则操作记录查询 | 运营管理员 | 2026-04-01 |

## 四、需求描述

### 4.1 规则配置页
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
    <td>规则基本信息配置</td>
    <td>
      <strong>业务逻辑：</strong>用户填写规则名称并选择适用省份，保存后生成规则基本信息<br>
      <strong>字段规则：</strong><br>
      - 规则名称: 文本, 必填, 无明确字符限制
      - 适用省份: 下拉选择, 选填, 可选择全国或具体省份
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/index.html</td>
    <td>梯度配置管理</td>
    <td>
      <strong>业务逻辑：</strong>用户可添加/删除梯度，配置超期天数起始值、间隔天数、惩罚动作和具体值，系统根据梯度顺序自动计算超期天数<br>
      <strong>字段规则：</strong><br>
      - 超期天数起始值: 数字, 必填, 最小值为1
      - 间隔天数: 数字, 必填, 最小值为1
      - 惩罚动作: 下拉选择, 必填, 可选择工程款降价或订单回购
      - 具体值: 数字, 必填(当惩罚动作为工程款降价时), 最小值为0, 步长为0.01
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/index.html</td>
    <td>保存规则</td>
    <td>
      <strong>业务逻辑：</strong>用户点击保存按钮后，系统将配置的规则信息保存到数据库<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
</table>

### 4.2 规则列表页
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
    <td>规则列表展示</td>
    <td>
      <strong>业务逻辑：</strong>系统展示所有已配置的并网超期规则，包括区域、各梯度惩罚措施、操作时间和操作人<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/list.html</td>
    <td>规则启用/禁用</td>
    <td>
      <strong>业务逻辑：</strong>用户可通过开关启用或禁用规则，启用的规则会应用到对应区域的订单<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/list.html</td>
    <td>规则编辑</td>
    <td>
      <strong>业务逻辑：</strong>用户点击编辑按钮，跳转到规则配置页面进行修改<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/list.html</td>
    <td>规则删除</td>
    <td>
      <strong>业务逻辑：</strong>用户点击删除按钮，弹出确认对话框，确认后删除规则<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>5</td>
    <td>/list.html</td>
    <td>规则日志查看</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查看日志按钮，弹出操作日志对话框，展示规则的操作历史<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>6</td>
    <td>/list.html</td>
    <td>添加区域</td>
    <td>
      <strong>业务逻辑：</strong>用户点击添加区域按钮，弹出添加区域对话框，可选择省份、城市和区县<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
</table>

### 4.3 订单超期记录页
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
    <td>/order_overdue.html</td>
    <td>订单超期查询</td>
    <td>
      <strong>业务逻辑：</strong>用户通过多个筛选条件查询超期订单，包括平台编号、产品、团队名称、订单状态等<br>
      <strong>字段规则：</strong><br>
      - 平台编号: 文本, 选填, 无明确字符限制
      - 产品: 下拉选择, 选填, 可选择5、7、8、9、10产品
      - 团队名称: 下拉选择, 选填
      - 订单状态: 下拉选择, 选填, 包含多种订单状态
      - 安装地区: 下拉选择, 选填
      - 主账号决策类型: 下拉选择, 选填
      - 客户姓名: 文本, 选填, 无明确字符限制
      - 组件规格: 文本, 选填, 无明确字符限制
      - 电站设计方案: 下拉选择, 选填
      - 并网截止约定时间: 日期范围, 选填
      - 代理商: 下拉选择, 选填
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/order_overdue.html</td>
    <td>订单超期处理</td>
    <td>
      <strong>业务逻辑：</strong>用户可对超期订单进行延长宽限期、撤销等操作<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>3</td>
    <td>/order_overdue.html</td>
    <td>订单日志查看</td>
    <td>
      <strong>业务逻辑：</strong>用户点击日志按钮，查看订单的操作历史<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>4</td>
    <td>/order_overdue.html</td>
    <td>批量操作</td>
    <td>
      <strong>业务逻辑：</strong>用户可进行一键撤回、导入导出记录、导出、导入等批量操作<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
</table>

### 4.4 添加区域模态框
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
    <td>/add_region_modal.html</td>
    <td>区域层级选择</td>
    <td>
      <strong>业务逻辑：</strong>用户选择省份后，系统自动加载对应城市列表；选择城市后，系统自动加载对应区县列表<br>
      <strong>字段规则：</strong><br>
      - 省份: 下拉选择, 必填
      - 城市: 下拉选择, 选填(依赖省份选择)
      - 区县: 下拉选择, 选填(依赖城市选择)
    </td>
    <td>2026-04-01</td>
  </tr>
</table>

### 4.5 删除规则模态框
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
    <td>规则删除确认</td>
    <td>
      <strong>业务逻辑：</strong>系统提示用户删除规则的风险，用户确认后删除规则<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
</table>

### 4.6 操作日志模态框
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
    <td>规则操作记录查询</td>
    <td>
      <strong>业务逻辑：</strong>系统展示规则的操作历史，包括操作人、操作时间、操作内容和操作类型<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
  <tr>
    <td>[占位: 待补充截图]</td>
    <td>2</td>
    <td>/log_modal.html</td>
    <td>操作明细查看</td>
    <td>
      <strong>业务逻辑：</strong>用户点击查看明细按钮，查看具体操作的详细信息<br>
      <strong>字段规则：</strong>无
    </td>
    <td>2026-04-01</td>
  </tr>
</table>