const express = require("express");
const router = express.Router();

const paymentController = require("../controller/paymentController");

// router.post("/create-payment", paymentController.createPaymentIntent);   
router.post("/create-payment", paymentController.createPayment);
router.get("/get-payment-history/:meterId", paymentController.getPaymentHistory);
router.get("/get-payment-history-by/:meterId", paymentController.getPaymentsForMeterId)

module.exports = router;