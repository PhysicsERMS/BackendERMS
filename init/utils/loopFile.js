/**
 * Date：2018/3/26
 * Author：Wangtaidong
 * Function：遍历指定目录所有文件
 * @param  {string} pathName    需要进行遍历的目录路径
 * @param  {string} mime        遍历的文件后缀名
 * @return {object}             返回遍历后的目录结果
 */
const fs = require('fs');

const loopFile = (pathName, mime) => {
  const files = fs.readdirSync(pathName);
  const fileList = {};

  files.forEach((item) => {
    const itemArr = item.split('.');
    const itemMime = itemArr.length > 1 ? itemArr[itemArr.length - 1] : 'undefined';
    if (itemMime === mime) {
      fileList[item] = pathName + item;
    }
  });

  return fileList;  //{ 'post.sql': '../sqlpost.sql', 'user.sql': '../sqluser.sql' }
  // console.log(fileList)
};

module.exports = loopFile;