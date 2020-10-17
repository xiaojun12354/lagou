var crypto = require('crypto');
var secret = 'rqwefdsa';
function getCrypto(arg){
    var hash = crypto.createHmac('sha256', secret)
                    .updata(arg)
                    .digest('hex');
    return hash;
}

module.exports = getCrypto;