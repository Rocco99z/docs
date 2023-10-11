/**
 * 导出方法
 * @example exportDat(res,'订单导出数据')
 */
export default function exportData(res: any, fileName: string | undefined) {
  const content = res
  const data = new Blob([content], {
    type: "application/vnd.ms-excel;charset=utf-8",
  })
  const downloadUrl = window.URL.createObjectURL(data)
  const anchor = document.createElement("a")
  anchor.href = downloadUrl
  anchor.download = `${fileName}.xlsx` // 表格名称.文件类型
  anchor.click()
  window.URL.revokeObjectURL(res)
}
