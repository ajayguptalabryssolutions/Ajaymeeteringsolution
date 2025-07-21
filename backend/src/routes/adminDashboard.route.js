const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");


router.get("/get-admin-stats",  adminController.getAdminDashboardStats);
//complete
router.post("/add-admin-stats", adminController.addAdminDashboardStats);
//coomplete
router.post("/saveadminconsumption", adminController.saveAdminConsumption);
router.get("/get-admin-user-meterdata/:adminId", adminController.getAdminUserMeterData);
//complete
router.get("/recent-data/:adminId", adminController.getLatestDashboardStat);
//complete
router.get("/get-admin-daily-consumption/:adminId", adminController.fetchAdminDailyConsumption);

module.exports = router;