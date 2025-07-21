const express = require('express');
const router = express.Router();

const  userRoutes  = require('./user.route');
const  authRoutes  = require('./auth.route');
const  meterRoutes  = require('./meter.route');
const adminDashboardRoutes = require('./adminDashboard.route');
const paymentRoutes = require('./payment.route');

const allRoutes = {
    user: userRoutes,
    auth: authRoutes,
    meter: meterRoutes,
    adminDashboard: adminDashboardRoutes,
    payment: paymentRoutes,
}

router.use('/user', allRoutes.user);
router.use('/auth', allRoutes.auth);
router.use('/meter', allRoutes.meter);
router.use('/admindashboard', allRoutes.adminDashboard);
router.use('/payment', allRoutes.payment);

module.exports = router;