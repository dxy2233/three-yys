import request from '@/utils/request'

/**
 * @description 校验建设节点：基线检查完成情况、渗透测试完成情况、漏洞扫描完成情况
 */
export function checkConstruction(processId) {
  return request({
    url: '/reportevaluation/checkConstruction',
    method: 'get',
    params: { processId },
  })
}

/**
 * @description 创建上线前安全风险评估报告
 * @param netItemBOList 网络单元
 * @param processId 流程ID
 * @param type 网络/系统类型
 * @param mainScale 主体建设规模
 * @param netScale 网络安全配套建设规模
 * @param completedTime 工程完工时间
 * @param onlineTime 计划上线时间
 * @param buildOrg 工程建设部门信息
 * @param serviceOrg 工程服务部门信息
 * @param personBOList 评估单位：安全人员信息
 * @param imgPath 扫描结果图片路径
 * @param logState 日志检查结果
 * @param hostNumber 无主账号
 * @param psdNumber 弱口令账号数
 * @param securityState 安全保障设施防护能力评估情况
 */
export function createReportEvaluation(data) {
  return request({
    url: '/reportevaluation/createReportEvaluation',
    method: 'post',
    data,
  })
}

/**
 * @description 获取安全评估报告相关的枚举值集合
 */
export function getEnumList() {
  return request({
    url: '/reportevaluation/getEnumList',
    method: 'get',
  })
}

/**
 * @description 上传扫描结果图片
 */
export function uploadImg(data) {
  return request({
    url: '/reportevaluation/uploadImg',
    method: 'post',
    data,
  })
}
