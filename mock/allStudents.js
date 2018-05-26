const Mock = require('mockjs');

const data = Mock.mock({
  'students|30': [{
    'number|+1': 1409030110,
    'password': 123456,
    'name': '@cname',
    'college':'理学院',
    'class': /^应用物理1[3-7]0[1-5]$/,
    'phone': /^1[34578]\d{9}$/,
    'email': '@EMAIL',
  }],
  'subscribes|30': [{
    'experiment_id|0-9': 0,
    'student_id|0-29':0,
    'class_time':/0[1-18]0[1-5]0708/,
    'pre_status|': 0,
    'status': 0,
    'download_url': '',
    'view_url': ''
  }],
});

module.exports = data;
