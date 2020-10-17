var express = require('express');
var controllerUser = require('../controller/user');
var getYZM = require('../common/yzm');
var router = express.Router();

//登录功能
router.post('/login',controllerUser.login);
//注册功能
router.post('/register',controllerUser.register);
//登出功能
router.post('/logout',controllerUser.logout);
//验证码功能
router.get('/yzm',getYZM);


module.exports = router;
