const express = require('express');
const router = express.Router();

const  userRoutes  = require('./user.route');
const  authRoutes  = require('./auth.route');
const  meterRoutes  = require('./meter.route');
const  rolesRoutes = require("./roles.route")

const allRoutes = {
    user: userRoutes,
    auth: authRoutes,
    meter: meterRoutes,
    roles: rolesRoutes,
    
}

router.use('/user', allRoutes.user);
router.use('/auth', allRoutes.auth);
router.use('/meter', allRoutes.meter);
router.use('/roles', allRoutes.roles)

module.exports = router;