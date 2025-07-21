
// const adminService = require("../service/adminService")

// const getAdminDashboardStats = async (req, res) => {
//   try {
//     console.log("Admin ID: ==================", req.user._id);
//      console.log("Admin ID: ==================", req.user.adminId);
//     const adminId = req.user._id; // Set by auth middleware
    
//     const stats = await adminService.adminDashboardStats(adminId);
//     res.status(200).json(stats);
//   } catch (error) {
//     console.error("Dashboard fetch error:", error);
//     res.status(500).json({ message: "Failed to fetch dashboard stats" });
//   }
// };

// module.exports = {
//   getAdminDashboardStats,
// };

// controller/adminController.js

// controller/dashboardController.js
const adminService = require("../service/adminService");

// Add admin dashboard stats
// This function adds or updates the admin dashboard stats
// correct
const addAdminDashboardStats = async (req, res) => {
  try {
    const adminData = await adminService.addAdminDashboardStat(); 
    res.status(200).json({ data: adminData, message: "Admin dashboard stats updated successfully" });
  } catch (error) {
    console.error("Error updating dashboard stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add admin dashboard stats
// This function generates and saves the admin daily consumption data
// correct
const saveAdminConsumption = async (req, res) => {
  try {
    const result = await adminService.generateAndSaveAdminConsumption();
    res.status(200).json({ message: "Admin daily consumption data saved successfully", data: result });
  } catch (err) {
    console.error("Error generating admin daily consumption:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



const getAdminDashboardStats = async (req, res) => {
  try {
    const { adminId } = req.params;
    const stats = await adminService.getAdminDashboardStats(adminId);
    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


const getAdminUserMeterData = async (req, res) => {
  try {
    const { adminId } = req.params;

    if (!adminId) {
      return res.status(400).json({ success: false, message: "adminId param is required" });
    }

    const data = await adminService.getAllAdminsUserMeterData(adminId);
    res.json({
      success: true,
      data: data,
      message: "Admin user meter data fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching dashboard meter data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};




const getLatestDashboardStat = async (req, res) => {
  try {
    const { adminId } = req.params;

    if (!adminId) {
      return res.status(400).json({ success: false, message: "adminId is required" });
    }

    const data = await adminService.getLatestAdminDashboardStat(adminId);

    if (!data) {
      return res.status(404).json({ success: false, message: "No dashboard data found" });
    }

    return res.json({
      success: true,
      data,
      message: "Latest admin dashboard stat fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching admin dashboard stat:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};




// Fetch admin daily consumption data by date range
// This function retrieves daily consumption data for a specific admin within a date range  
//correct
const fetchAdminDailyConsumption = async (req, res) => {
  try {
    const { adminId } = req.params;
    const { from, to } = req.query;

    // Validation
    if (!adminId) {
      return res.status(400).json({ success: false, message: "adminId required" });
    }

    const data = await adminService.getAdminConsumptionByDate(adminId, from, to);

    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};


module.exports = {
  addAdminDashboardStats,
  getAdminDashboardStats,
  saveAdminConsumption,
  getAdminUserMeterData,
  getLatestDashboardStat,
  fetchAdminDailyConsumption
};
