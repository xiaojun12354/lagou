var svgCaptcha = require('svg-captcha');

function getYZM(req,res,next){
    var captcha = svgCaptcha.create({
        noise: 4
    });
    req.session.captcha = captcha.text;
    res.type('svg');
    res.status(200).send(captcha.data);
}

module.exports = getYZM;