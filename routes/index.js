var express = require('express');
var controllerIndex = require('../controller/index');
var router = express.Router();

//访问 login 页面
router.get('/login',controllerIndex.login);

//访问 register 页面
router.get('/register',controllerIndex.register);

//访问 admin 页面
router.get('/admin',controllerIndex.admin);


module.exports = router;
