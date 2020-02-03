const mongoose = require('mongoose');
const util = require('util');
const config = require('./vars.config');
const mongoUri = config.mongo.host;

mongoose.Promise = global.Promise;

mongoose.connect(mongoUri, {
    keepAlive: 1, useMongoClient: true
});

mongoose.connection.on('error', () => {
    throw new Error(`Mongo db connection failed : ${mongoUri}`);
});

if (config.mongooseDebug) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
        console.log(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
    });
}
