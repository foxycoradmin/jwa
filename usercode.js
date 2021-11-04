const jwa = require('jwa');
const hmac = jwa('HS256');

module.exports = (data) => {
const input = data.private_key;
const secret = data.unsignedToken;
const signature = hmac.sign(input, secret);

data.case1 = hmac.verify(input, signature, secret); // === true
data.case2 = hmac.verify(input, signature, 'trickery!'); // === false
data.test1 = signature;
    return data;
};





