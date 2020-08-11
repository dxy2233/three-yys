import request from '@/utils/request'

/**
 * @description 删除用户
 */
export function deleteUser(id) {
  return request({
    url: '/user/deleteUser',
    method: 'get',
    params: { id },
  })
}

/**
 * @description 根据登录用户查询用户列表
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param name 用户姓名
 * @param phone 联系方式
 * @param orgId 所属单位
 */
export function getUserList(data) {
  return request({
    url: '/user/getUserList',
    method: 'post',
    data,
  })
}

/**
 * @description 重置密码
 */
export function resetPassword(id) {
  return request({
    url: '/user/resetPassword',
    method: 'get',
    params: { id },
  })
}

/**
 * @description 保存用户
 * @param id 用户ID
 * @param name 姓名
 * @param phone 联系方式
 * @param address 联系地址
 * @param username 用户名
 * @param remark 备注
 * @param roles 角色ID集合
 * @param menus 菜单
 * @param sysOrgNodeId 所属单位ID
 * @param facilitatorId 所属服务商ID
 * @param personId 所属服务商员工ID
 * @param type 用户类型：1 ：是普通用户 2： 是服务商用户 3 审计人员
 * @param visibleMap 前端非表格控件是否可见
 */
export function saveUser(data) {
  return request({
    url: '/user/saveUser',
    method: 'post',
    data,
  })
}

/**
 * @description 解锁用户
 */
export function unLockUser(id) {
  return request({
    url: '/user/unLockUser',
    method: 'get',
    params: { id },
  })
}

/**
 * @description 修改密码
 * @param userId 用户ID
 * @param oldPassword 旧密码
 * @param newPassword 新密码
 */
export function updatePassword(data) {
  return request({
    url: '/user/updatePassword',
    method: 'post',
    data,
  })
}
