const Course = require('../models/Course');
class CourseController{
    async show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .lean()
        .then(course => {
            res.render('courses/video', {course: course})
        })
        .catch(next)
    }
}   
module.exports = new CourseController