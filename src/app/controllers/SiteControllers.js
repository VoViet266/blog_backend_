const Course = require('../models/Course');
class SiteControllers {
    async index(req, res, next) {
    Course.find({})
        .lean()
        .then(courses => {
            res.render('home', {courses: courses})
        })
        .catch(next)  
    }
    search(req, res) {
        res.render('searchs')
    }
    News(red, res) {
        res.render('news');
    }
  
}
module.exports = new SiteControllers; 