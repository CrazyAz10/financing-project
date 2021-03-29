module.exports = {
  title: '算力果',

  /**
   * @type {String}
   * @description 语言
   */
  languages: localStorage.getItem('languages') === null ? 
  {
    name: "中文简体",
    locale: 'zh_cn',
    // icon: require("@/assets/images/zh_CN@2x.png"),
  } : JSON.parse(localStorage.getItem('languages')),
}