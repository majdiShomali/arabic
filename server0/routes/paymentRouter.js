const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const upload = require("../middleware/handleImage")

// router.get("/api/payment", paymentController.allPayment);
router.get("/api/paymentAdmin", paymentController.allPaymentAdmin);
router.get("/api/paymentAdminP", paymentController.allPaymentAdminP);
router.get("/api/paymentAdminA", paymentController.allPaymentAdminA);
router.post("/api/payment",upload.single("image"), paymentController.newPayment);
// router.get("/api/payment/:id", paymentController.onePayment);
router.put("/api/payment/:id", paymentController.updatePayment);
// router.delete("/api/payment/:id", paymentController.deletePayment);


module.exports = router;