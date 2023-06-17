
export const copyText = (text: string) => {
    // 创建一个textarea元素用于复制
    let copyTextarea = document.createElement('textarea');

    // 设置要复制到剪贴板的文字内容
    copyTextarea.value = text;

    // 将textarea元素添加到dom结构中
    document.body.appendChild(copyTextarea);

    // 选择textarea中的所有文本
    copyTextarea.select();

    // 复制选中的文本到剪贴板
    document.execCommand('copy');

    // 移除textarea元素
    document.body.removeChild(copyTextarea);
}