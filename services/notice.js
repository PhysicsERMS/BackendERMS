const noticeModel = require('../models/notice');
const notice = {
  /**
   * 获取所有通知列表
   * @return {object}          所有通知列表
   */
  async getNotices( formData ) {
    const current = parseInt(formData.page.current );
    const pageSize = parseInt(formData.page.pageSize);
    const start = current * pageSize - pageSize;
    const rowNum = pageSize;
    let tId;
    if (formData.tId) {
      tId = parseInt(formData.tId);
    }

    let resultData = await noticeModel.getNotices( start, rowNum, tId );
    return resultData;
  },

  async create( formData ) {
    const tId = parseInt(formData.tId );
    const title = formData.title ;
    const content = formData.content ;
    const time = Date.now();
    let resultData = await noticeModel.create( tId, title, content, time );
    return resultData;
  },

  async update( formData ) {
    const id = parseInt(formData.id );
    const tId = parseInt(formData.tId );
    const title = formData.title ;
    const content = formData.content ;
    const time = Date.now();
    let resultData = await noticeModel.update( id, tId, title, content, time );
    return resultData;
  },

  async remove( formData ) {
    const id = parseInt(formData.id );
    let resultData = await noticeModel.remove( id );
    return resultData;
  },
};


module.exports = notice;