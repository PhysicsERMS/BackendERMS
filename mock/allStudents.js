const Mock = require('mockjs');

const data = Mock.mock({
  'list|50-80': [{
    'number|+1': 1409030110,
    'password': 123456,
    'name': '@cname',
    'college':'理学院',
    'class': '应用物理1401',
    'phone': /^1[34578]\d{9}$/,
    'email': '@EMAIL',
  }]
});

module.exports = data;
