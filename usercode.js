const jwa = require('jwa');
const hmac = jwa('HS256');
const signature = hmac.sign(input, secret);

module.exports = (data) => {
const input = data.unsignedToken;
const secret = data.private_key;
data.case1 = hmac.verify(input, signature, secret); // === true
data.case2 = hmac.verify(input, signature, 'trickery!'); // === false

    return data;
