const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config/vars.config');
const User = require('../models/user.model');

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.jwtSecretKey;

passport.use(new JwtStrategy(jwtOptions, async function (jwt_payload, done) {

    let user = await User.findById(jwt_payload._id);

    if (!user) {
        user = user.toObject();
        return done(null, false);
    } else {
        return done(null, user);
    }

}));


module.exports = passport;
