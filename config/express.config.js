const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const httpError = require('http-errors');
const logger = require('morgan');
const config = require('./vars.config')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');
const passport = require('./passport.config')
const routes = require('../routes/index.route');
const app = express();

if (config.env === 'development') {
        app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.use(express.static('assets'));

app.use('/api/', routes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
        const err = new httpError(404)
        return next(err);
});
app.use((err, req, res, next) => {
        res.status(err.status || 500).json({
                message: err.message
        });
        next(err);
});

module.exports = app;


