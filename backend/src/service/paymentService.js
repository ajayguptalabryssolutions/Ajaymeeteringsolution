const Payment = require("../model/Payment");

function getFailureReason(error) {
  if (!error) return "Unknown error";
  if (error.code === "TIMEOUT") return "Payment timeout";
  if (error.code === "INSUFFICIENT_FUNDS") return "Insufficient balance";
  if (error.code === "INVALID_UPI") return "Invalid UPI ID";
  if (error.code === "GATEWAY_ERROR") return "Payment gateway internal error";
  return error.message || "Unknown failure reason";
}

const createPayment = async (data, error = null) => {
  const {
    userId,
    meterId,
    adminId,
    amount,
    paymentMethod = "Other",
    transactionId = null,
    source = "web",
    location = {},
    ipAddress = null,
    deviceInfo = null,
    status = "success",
    verifiedBy = null,
    referrerCode = null,
  } = data;

  const remarks = status === "failed" ? getFailureReason(error) : "";

  const newPayment = new Payment({
    userId,
    meterId,
    adminId,
    amount,
    paymentMethod,
    transactionId,
    status,
    remarks,
    source,
    location,
    ipAddress,
    deviceInfo,
    verifiedBy,
    referrerCode,
  });

  return await newPayment.save();
};


module.exports = {
  createPayment,
};
