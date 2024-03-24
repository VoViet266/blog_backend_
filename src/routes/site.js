const express = require('express');
const router = express.Router();

const sitecontrollers = require('../app/controllers/SiteControllers');

router.get('/search', sitecontrollers.search);
router.get('/news', sitecontrollers.News);
router.get('/', sitecontrollers.index);

module.exports = router 