const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./src/config/dbConfig');
const mainRoutes = require('./src/routes/index');
const cron = require("node-cron");
// const { addAdminDashboardStats } = require('./src/service/adminService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();


app.use('/api/v1', mainRoutes);


// // Run every hour at minute 0
// cron.schedule("0 * * * *", async () => {
//   console.log(" Running hourly Admin Dashboard Stats Update...");
//   try {
//     await addAdminDashboardStats();
//     console.log("Admin Dashboard Stats updated successfully.");
//   } catch (error) {
//     console.error(" Error updating dashboard stats:", error);
//   }
// });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
