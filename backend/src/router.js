const express = require("express");

const router = express.Router();
const upload = require("./services/upLoad");
const uploadTravels = require("./services/upLoad-travels");
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import userControllers module for handling user-related operations
const userControllers = require("./controllers/userControllers");
const travelController = require("./controllers/travelController");
const bookingController = require("./controllers/bookingController");
const paymentController = require("./controllers/paymentController");
const periodController = require("./controllers/periodController");
const travelPeriodController = require("./controllers/travelPeriodController");

const hashPassword = require("./services/hashPassword");
const hashEditPassword = require("./services/hashEditPassword");
const verifyToken = require("./services/verifyToken");
const isAdmin = require("./services/isAdmin");

// routes publiques
router.post("/users", upload, hashPassword, userControllers.create);
router.post("/login", userControllers.readByEmail);
router.get("/travels", travelController.browse);
router.get("/travels/:id", travelController.read);
router.get("/periods", periodController.browse);

router.get("/travels/:id/periods", travelPeriodController.getPeriodsByIdTravel);

router.use(verifyToken);
// routes utilisateur
router.get("/me", userControllers.readById);

router.post("/logout", userControllers.logout);
router.patch("/users/:id", userControllers.edit);

router.get("/logout", userControllers.logout);
// router.patch("/users/:id", upload, userControllers.edit);

router.patch(
  "/users/:id/update-picture",
  upload,
  userControllers.editOnlyPicture
);
router.patch(
  "/users/update-password",
  hashEditPassword,
  userControllers.editPassword
);
router.post("/payments", paymentController.create);
router.post("/bookings", bookingController.create);
router.delete("/payments/:id", paymentController.deletePaymentAndBooking);

// routes administrateur

router.get("/users", isAdmin, userControllers.browse);
router.get("/users/:id", userControllers.read);
router.get("/users/:id/bookings", userControllers.getAllBookingsByUser);
router.delete("/users/:id", userControllers.deleteUser);

router.post("/travels", uploadTravels, travelController.createByAdmin);
router.patch("/travels/:id", travelController.updateByAdmin);
router.patch(
  "/travels/:id/update-thumbnail",
  uploadTravels,
  travelController.updateTravelPicture
);
router.delete("/travels/:id", travelController.deleteByAdmin);

router.get("/bookings", bookingController.browse);
router.get("/bookings/:id", bookingController.read);
// router.get("/currents-bookings", bookingController.getAllInfo);
router.get("/bills/:id", bookingController.getFactureById);
router.delete("/bookings/:id", bookingController.deleteBooking);

// Route payment (créer une route pour récup payment + user)
router.get("/payments", paymentController.browse);

// Route period
// à créer => router.post("/periods", periodController.create);
router.get("/periods/:id", periodController.readById);
/* ************************************************************************* */

module.exports = router;
