const Mock = require('mockjs');

const data = Mock.mock({
  'list|10': [{
    'name': /^大学物理实验[A-Z]\d{1}$/,
    'teacher_id|1-12': 0,
    'room': /^基础[A-D][1-5][0-2]\d{1}$/,
  }]
});

module.exports = data;