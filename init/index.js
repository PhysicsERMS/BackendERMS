const getSqlContentMap = require('./utils/getSqlContentMap');
const { query } = require('./utils/db');

//打印脚本执行日志
const eventLog = (err, sqlFile, index ) => {
  if (err) {
    console.log(`[ERROR] ${sqlFile} 第${index + 1}条脚本执行失败o(╯□╰)o ！`);
    return false;
  }
  console.log(`[SUCCESS] ${sqlFile} 第${index + 1}条脚本执行成功O(∩_∩)O !`);
};

//获取所有sql脚本内容
const sqlContentMap = getSqlContentMap();

//执行建表sql脚本
const createAllTables = async () => {
  for (let key in sqlContentMap) {
    const sqlShell = sqlContentMap[key];
    const sqlShellList = sqlShell.split(';');
    for (let [index, shell] of sqlShellList.entries()) {
      if (shell.trim()) {
        const result = await query(shell);
        if (result.serverStatus * 1 === 2) {
          eventLog(false, key, index);
        } else {
          eventLog(true, key, index);
        }

      }
    }
  }
  console.log('sql脚本执行结束！');
  console.log('请按 ctrl + c 键退出！');
};

createAllTables();