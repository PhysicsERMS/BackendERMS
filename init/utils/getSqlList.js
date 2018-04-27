/**
 * Date：2018/3/26
 * Author：Wangtaidong
 * Function：获取sql目录下的所有sql文件
 * @return {object}
 */
const fs = require('fs');
const loopFile = require('./loopFile');

const getSqlList = function () {
  let basePath = __dirname;
  basePath = basePath.replace(/\\/g,'\/');

  let pathArr = basePath.split('\/');
  pathArr = pathArr.splice(0, pathArr.length - 1);

  basePath = pathArr.join('\/') + '/qw/';
  return loopFile(basePath, 'sql');
};

module.exports = getSqlList;