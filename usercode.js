const jwa = require('jwa');

module.exports = (data) => {
var ecdsa = jwa('RS256');
var signature = ecdsa.sign(data.unsignedToken, data.private_key);
data.jwt_encoded = data.unsignedToken + "." + signature;

    return data;
};
