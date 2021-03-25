let config;
try {
    config = require('../../config.json');
} catch (error) {
    config = null;
}

exports.mongoUri = config ? config.mongoUri : process.env.MONGO_URI;
exports.port = config ? config.port : process.env.PORT;