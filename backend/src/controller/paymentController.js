const paymentService = require("../service/paymentService");

const handleCreatePayment = async (req, res) => {
  try {
    const paymentData = req.body;

    // Optional error simulation (for failed status handling)
    const error = paymentData.status === "failed" ? paymentData.errorInfo : null;

    const payment = await paymentService.createPayment(paymentData, error);

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

module.exports = {handleCreatePayment};
