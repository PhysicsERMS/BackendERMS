const Koa = require('koa');
const logger = require('koa-logger');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const bodyParse = require('koa-bodyparser');
const koaStatic = require('koa-static');

const config = require('./utils/config');
const routers = require('./routes/index');

const app = new Koa();

// error handler
onerror(app);


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
  store: new MysqlStore(sessionMysqlConfig)
}));


app.use(bodyParse());
app.use(json());
app.use(logger());

app.use(koaStatic(__dirname + '/public'));

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// 监听启动端口
app.listen( config.port )
console.log(`the server is start at port ${config.port}`)


