const jwa = require('jwa');
const hmac = jwa('RS256');

module.exports = (data) => {
const input = data.private_key;
const secret = data.unsignedToken;
const signature = hmac.sign(secret, input);

data.test1 = signature;
    return data;
};

