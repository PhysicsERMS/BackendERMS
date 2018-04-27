/**
 * Date：2018/3/26
 * Author：Wangtaidong
 */

const fs = require('fs');
const getSqlList = require('./getSqlList');

const sqlContentMap = {};

/**
 * Function：获取sql文件内容
 * @param  {string}  fileName 文件名称
 * @param  {string}  path     文件路径
 * @return {string}           文件内容
 */
const getSqlContent = (fileName, path) => {
  const content = fs.readFileSync(path, 'binary') // 以二进制方式读取
  sqlContentMap[fileName] = content;
};


/**
 * Function：获取所有sql脚本内容
 * @return {object}
 */
const getSqlContentMap = () => {
  const sqlList = getSqlList();

  for (let key in sqlList) {
    getSqlContent(key, sqlList[key]);
  }
  // sqlList.forEach((item) => {
  //   getSqlContent(item, sqlList[item])
  // });
  return sqlContentMap;
};

module.exports = getSqlContentMap;