const Koa = require('koa');
const logger = require('koa-logger');
const json = require('koa-json');
const onerror = require('koa-onerror');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const koaBody = require('koa-body');
const convert = require('koa-convert');

const config = require('./utils/config');
const routers = require('./routes/index');

const app = new Koa();

// error handler
onerror(app);


// 存放sessionId的cookie配置
let cookie = {
  maxAge: '', // cookie有效时长
  expires: '',  // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: '', // 是否只用于http请求中获取
  overwrite: '',  // 是否允许重写
  secure: '',
  sameSite: '',
  signed: '',
};

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
};


//配置session中间件
app.use(session({
  key: 'SESSION_ID',
  store: new MysqlStore(sessionMysqlConfig),
  cookie: cookie
}));

app.use(convert(koaBody()));

app.use(json());
app.use(logger());

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());


// 监听启动端口
app.listen( config.port );
console.log(`the server is start at port ${config.port}`);


