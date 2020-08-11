import request from '@/utils/request'

/**
 * @description 下载文件
 */
export function download(path) {
  return request({
    url: '/sftp/download',
    method: 'get',
    responseType: 'blob',
    params: { path },
  })
}

/**
 * @description 预览文件
 */
export function preview(path) {
  return request({
    url: '/sftp/preview',
    method: 'get',
    params: { path },
  })
}
