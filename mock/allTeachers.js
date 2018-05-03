const Mock = require('mockjs');

const data = Mock.mock({
  'list|12': [{
    'id|+1': 1,
    'password': 123456,
    'name': '@cname',
    'nick': '@first',
    'office':/^基础[A-D][1-5][0-2]\d{1}$/,
    'phone': /^1[34578]\d{9}$/,
    'email': '@EMAIL',
  }]
});

module.exports = data;
