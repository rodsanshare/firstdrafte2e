crypto = require('crypto');

module.exports = 
function decryptIt(x) {
    decipher = crypto.createDecipher('aes256', 'shared_key')
    res = decipher.update(x, 'base64', 'utf8')
    res += decipher.final('utf8')
    
    return res;
}