const express = require('express');
const router = express.Router();

const CourseControllers = require('../app/controllers/CourseControllers');


router.get('/:slug', CourseControllers.show); 

module.exports = router 