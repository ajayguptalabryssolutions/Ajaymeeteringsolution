const Payment = require("../model/Payment");
const Meter = require("../model/Meter")
const mongoose = require("mongoose");
// function getFailureReason(error) {
//   if (!error) return "Unknown error";
//   if (error.code === "TIMEOUT") return "Payment timeout";
//   if (error.code === "INSUFFICIENT_FUNDS") return "Insufficient balance";
//   if (error.code === "INVALID_UPI") return "Invalid UPI ID";
//   if (error.code === "GATEWAY_ERROR") return "Payment gateway internal error";
//   return error.message || "Unknown failure reason";
// }

const createPayment = async (paymentData) => {
  try {
    const {
        meterId,
      amount,
      paymentMethod,
      transactionId,
      status,
      remarks,
      invoiceUrl,
      receiptNumber,
      source,
      location,
      ipAddress,
      deviceInfo,
      refund,
      verifiedBy,
      referrerCode,
    } = paymentData;

    // Validation
    if (!meterId || !amount) {
      throw new Error("meterId and amount are required");
    }

    const newPayment = new Payment({
        meterId,
      amount,
      paymentMethod,
      transactionId,
      status,
      remarks,
      invoiceUrl,
      receiptNumber,
      source,
      location,
      ipAddress,
      deviceInfo,
      refund,
      verifiedBy,
      referrerCode,
    });

    return await newPayment.save();
  } catch (err) {
    console.error("PaymentService Error:", err);
    throw err;
  }
};

// const getPaymentHistory = async (meterId) => {
//   try {
//     if (!meterId) {
//       throw new Error("meterId is required");
//     }

//     const paymentData = await Payment.find({ meterId }).sort({ createdAt: -1 });
//     return paymentData;
//   } catch (err) {
//     console.error("PaymentService Error:", err);
//     throw err;
//   }
// };

const getPaymentHistory = async ({ meterId, startTime, endTime, search, paginationOptions }) => {
  try {
    const query = { meterId };

    // Filter by date range
  if (startTime || endTime) {
  query.createdAt = {};
  if (startTime) query.createdAt.$gte = new Date(startTime);
  if (endTime) {
    query.createdAt.$lte = new Date(new Date(endTime).setHours(23, 59, 59, 999));
  }
}

    // Search by transactionId or remarks (customize fields as needed)
    if (search) {
      query.$or = [
        { transactionId: { $regex: search, $options: "i" } },
        { remarks: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (paginationOptions.page - 1) * paginationOptions.limit;

    const [data, total] = await Promise.all([
      Payment.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(paginationOptions.limit),

      Payment.countDocuments(query)
    ]);

    return {
      records: data,
      total,
      page: paginationOptions.page,
      limit: paginationOptions.limit,
      totalPages: Math.ceil(total / paginationOptions.limit),
    };
  } catch (err) {
    console.error("PaymentService Error:", err);
    throw err;
  }
};


const getPaymentsByMeterId = async (meterIdString) => {
  // Step 1: Find the meter by string-based meterId
  const meter = await Meter.findOne({ meterId: meterIdString });
  if (!meter) {
    throw new Error("Meter not found");
  }

  // Step 2: Get all payments with meterId referencing meter._id
  const payments = await Payment.find({ meterId: meter._id }).sort({ createdAt: -1 });

  return payments;
};

module.exports = {
  createPayment,
  getPaymentHistory,
  getPaymentsByMeterId,
};
