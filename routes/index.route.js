const express = require('express');
const userAuthRoutes = require('./user-auth.route');
const userRoutes = require('./user.route');

const router = express.Router();

router.get('/status-check', (req, res) =>
    res.json({"health":"OK"})
);

// Routes that can be accessed without token 
router.use('/user-auth', userAuthRoutes);

// Routes that can be accessed with token 
router.use('/user', userRoutes);

module.exports = router;
