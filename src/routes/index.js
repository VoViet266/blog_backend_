// const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
function route(app) {

      app.use('/courses', courseRouter);

      app.use('/news', siteRouter);
      app.use('/search', siteRouter);
      app.use('/', siteRouter);
}
module.exports = route 