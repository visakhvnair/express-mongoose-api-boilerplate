const express = require('express');
const userAuthCtrl = require('../controllers/user/user-auth.controller');
const router = express.Router();

router.route('/create')
    .post(userAuthCtrl.create)

router.route('/authenticate')
    .post(userAuthCtrl.authenticate)

module.exports = router;