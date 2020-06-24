import request from '@/utils/request'

/**
 * @description 确认审计通过
 */
export function confirm(id) {
  return request({
    url: '/examination/confirm',
    method: 'get',
    params: { id },
  })
}

/**
 * @description 根据ID从审计组中删除被抽取的项目
 */
export function deleteProjectById(id) {
  return request({
    url: '/examination/deleteProjectById',
    method: 'get',
    params: { id },
  })
}

/**
 * @description 删除审计报告
 */
export function deleteReport(id) {
  return request({
    url: '/examination/deleteReport',
    method: 'get',
    params: { id },
  })
}

/**
 * @description 根据ID下载项目的所有相关资料
 */
export function downloadRelateFolderById(id, projectName) {
  return request({
    url: '/examination/downloadRelateFolderById',
    method: 'get',
    responseType: 'blob',
    params: { id, projectName },
  })
}

/**
 * @description 下载报告
 */
export function downloadReport(id) {
  return request({
    url: '/examination/downloadReport',
    method: 'get',
    responseType: 'blob',
    params: { id },
  })
}

/**
 * @description 获取没有被分配到审计组的所有项目
 */
export function getBaseInfoList() {
  return request({
    url: '/examination/getBaseInfoList',
    method: 'get',
  })
}

/**
 * @description 根据登录用户获取审计组列表，提供条件和分页查询
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param projectName 项目名称
 * @param orgId 运营单位
 * @param expired 是否过期：null查询全部；false查询未过期的；true查询已过期的
 * @param examineStatus 审计状态：null 全部；0 待审计；1 审计中；2 审计通过
 */
export function getExaminationGroupByUser(data) {
  return request({
    url: '/examination/getExaminationGroupByUser',
    method: 'post',
    data,
  })
}

/**
 * @description 获取没有被分配到审计组的所有专家
 */
export function getExpertList() {
  return request({
    url: '/examination/getExpertList',
    method: 'get',
  })
}

/**
 * @description 根据ID获取项目的相关资料
 */
export function getRelateFileListById(id) {
  return request({
    url: '/examination/getRelateFileListById',
    method: 'get',
    params: { id },
  })
}

/**
 * @description 获取审计报告列表
 */
export function getReportList(id) {
  return request({
    url: '/examination/getReportList',
    method: 'get',
    params: { id },
  })
}

/**
 * @description 保存审计组
 * @param name 审计组名称
 * @param expertLeaderId 专家组长ID
 * @param projectIdList 项目ID集合
 * @param expertIdList 专家ID集合
 * @param startTime 审计开始时间
 * @param endTime 审计结束时间
 */
export function saveExaminationGroup(data) {
  return request({
    url: '/examination/saveExaminationGroup',
    method: 'post',
    data,
  })
}

/**
 * @description 上传审计报告
 */
export function uploadReport(data) {
  return request({
    url: '/examination/uploadReport',
    method: 'post',
    data,
  })
}
