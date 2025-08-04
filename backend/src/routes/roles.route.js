// const express = require("express")
// const router = express.Router()

// const rolesController = require("../controller/roleController")
// const {authenticateToken} = require("../middleware/authenticateToken")
// const {roleBasedAuth} = require("../middleware/authenticateToken")


// router.get('/get-all-roles', authenticateToken,roleBasedAuth(["SuperAdmin","SuperAdminUser", "Admin","User"]), rolesController.getAllRoles)


// module.exports = router;

const express = require("express");
const router = express.Router();
const rolesController = require("../controller/roleController");
const { authenticateToken, roleBasedAuth } = require("../middleware/authenticateToken");

router.post("/create-role", rolesController.createRole)

router.get(
  "/get-all-roles",
  authenticateToken,roleBasedAuth(["superAdmin", "admin"]),rolesController.getAllRoles
);


module.exports = router;
