const paymentService = require("../service/paymentService");
const mongoose = require("mongoose");
const createPayment = async (req, res) => {
  try {
    const paymentData = req.body;

    // // Optional error simulation (for failed status handling)
    // const error = paymentData.status === "failed" ? paymentData.errorInfo : null;

    const payment = await paymentService.createPayment(paymentData);

    return res.status(201).json({
      success: true,
      message: "Payment recorded",
      data: payment
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create payment",
      error: err.message
    });
  }
};


// const getPaymentHistory = async (req, res) => {
//   try {
//     const {meterId}  = req.params; // You can change to req.params if using /:meterId

//     if (!mongoose.Types.ObjectId.isValid(meterId)) {
//       return res.status(400).json({
//         success: false,
//         message: "meterId is required"
//       });
//     }

//     const paymentHistory = await paymentService.getPaymentHistory(meterId);

//     return res.status(200).json({
//       success: true,
//       message: "Payment history retrieved successfully",
//       data: paymentHistory
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: "Failed to retrieve payment history",
//       error: err.message
//     });
//   }
// };

const getPaymentHistory = async (req, res) => {
  try {
    const { meterId } = req.params;
    const { startTime, endTime, search, page = 1, limit = 10 } = req.query;

    if (!mongoose.Types.ObjectId.isValid(meterId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid meterId",
      });
    }

    const paginationOptions = {
      page: parseInt(page),
      limit: parseInt(limit),
    };

    const paymentHistory = await paymentService.getPaymentHistory({
      meterId,
      startTime,
      endTime,
      search,
      paginationOptions,
    });

    return res.status(200).json({
      success: true,
      message: "Payment history retrieved successfully",
      data: paymentHistory,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve payment history",
      error: err.message,
    });
  }
};


const getPaymentsForMeterId = async (req, res) => {
  try {
    const { meterId } = req.params;

    const payments = await paymentService.getPaymentsByMeterId(meterId);

    res.status(200).json(payments);
  } catch (error) {
    console.error("Error in getPaymentsForMeterId:", error.message);
    res.status(error.message === "Meter not found" ? 404 : 500).json({
      message: error.message || "Internal server error",
    });
  }
};


module.exports = {createPayment, getPaymentHistory, getPaymentsForMeterId};
