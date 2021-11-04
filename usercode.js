const jwa = require('jwa');
const hmac = jwa('HS256');

module.exports = (data) => {
var  input = data.unsignedToken;
var secret = data.private_key;
var signature = hmac.sign(input, secret);
    
data.case1 = hmac.verify(input, signature, secret); // === true
data.case2 = hmac.verify(input, signature, 'trickery!'); // === false

    return data;
