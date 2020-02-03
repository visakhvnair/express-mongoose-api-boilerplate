require('dotenv').config();


const config = {
    env: process.env.NODE_ENV,
    serverHost: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    jwtSecretKey: process.env.JWT_SECRET,
    mongooseDebug: process.env.MONGOOSE_DEBUG,
    mongo: {
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT
    }
};

module.exports = config