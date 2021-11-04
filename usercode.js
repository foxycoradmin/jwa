const jwa = require('jwa');
const hmac = jwa('HS256');

module.exports = (data) => {
const input = data.unsignedToken;
const secret = data.private_key;
const signature = hmac.sign(input, secret);
    
data.case1 = hmac.verify(input, signature, secret); // === true
data.case2 = hmac.verify(input, signature, 'trickery!'); // === false

    return data;
