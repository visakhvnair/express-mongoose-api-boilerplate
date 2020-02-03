const express = require('express');
const passport = require('passport');
const userCtrl = require('../controllers/user/user.controller');
const requireRole = require('../middleware/require-role.middleware')

const router = express.Router();
router.use(passport.authenticate('jwt', { session: false }))

//Sample APIs
router.get('/',userCtrl.get)
router.get('/check-admin-role', requireRole(["admin"]), userCtrl.checkRole);
router.get('/check-user-role', requireRole(["user"]), userCtrl.checkRole);
router.get('/check-any-role', requireRole("*"), userCtrl.checkRole );

module.exports = router;