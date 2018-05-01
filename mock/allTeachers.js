const Mock = require('mockjs');

const data = Mock.mock({
  'list|10-15': [{
    'password': 123456,
    'name': '@cname',
    'nick': '@first',
    'office':'基础D311',
    'phone': /^1[34578]\d{9}$/,
    'email': '@EMAIL',
  }]
});

module.exports = data;
