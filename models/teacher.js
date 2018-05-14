const dbUtils = require('../utils/dbUtil');
const allTeachers = require('../mock/allTeachers').list;

const teacher = {

  /**
   * 根据用户名和密码查找用户
   * @param  {object} options 用户名密码对象
   * @return {object|null}         查找结果
   */
  async getOneByUserNameAndPassword( options ) {
    let _sql = `
    SELECT * from erms_teacher
      where password="${options.password}" and nick="${options.nick}"
      limit 1`;
    let result = await dbUtils.query( _sql );
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0];
    } else {
      result = null;
    }
    return result;
  },


  /**
   * 数据库获取所有教师列表
   * @return {object}       mysql执行结果
   */
  async getTeachers ( start, rowNum ) {
    let _sql1 = `SELECT * FROM teacher LIMIT ${start} , ${rowNum}`;
    let _sql2 = `SELECT * FROM teacher`;
    const data = await dbUtils.query( _sql1  );
    const datalTotal = await dbUtils.query( _sql2  );
    return {
      data, 
      total:datalTotal.length 
    };
  },

  /**
   * 从预约系统导入所有教师
   * @return boolearn       批量插入是否成功
   */
  async getAllTeachers () {
    const result = await dbUtils.insertData( 'erms_teacher', allTeachers);
    return result;
  },

  async saveFileAndScore(filePath, id, preScore, score, operateScore) {
    let _sql1 = `UPDATE erms_subscribe
    SET view_url = "${filePath}",
        pre_score = "${preScore}",
        score = "${score}",
        operate_score = "${operateScore}"
    WHERE id = ${id}`;
    const result1 = await dbUtils.query( _sql1 );
    if (result1) {
      let _sql2 = `UPDATE erms_subscribe
      SET status = "2" WHERE id = ${id}`;
      const result2 = await dbUtils.query( _sql2 );
      return result2;
    } else {
      throw new Error('实验报告保存失败');
    }
  },
};

module.exports = teacher;