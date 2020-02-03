const config = require('./config/vars.config');
const app = require('./config/express.config');
require('./config/mongoose.config');

if (!module.parent) {
    
    app.listen(config.port, config.serverHost, () => {

        
        console.log(`Server is listening on ${config.port} in  ${config.env} mode  ( http://${config.serverHost}:${config.port} )`);
        
    });
}

module.exports = app;
