const express = require("express");

const router = express.Router();
const upload = require("./services/upLoad");
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userControllers module for handling user-related operations
const userControllers = require("./controllers/userControllers");
const travelController = require("./controllers/travelController");
const bookingController = require("./controllers/bookingController");
const hashPassword = require("./services/hashPassword");
const verifyToken = require("./services/verifyToken");

// Route to get a list of users
router.get("/users", userControllers.browse);

// Route to get a specific user by ID
router.get("/users/:id", userControllers.read);
router.get("/users/:id/bookings", userControllers.getAllBookingsByUser);

// Route to add a new user
router.post("/users", upload, hashPassword, userControllers.create);

router.patch("/users/:id", userControllers.edit);
router.patch(
  "/users/:id/update-password",
  hashPassword,
  userControllers.editPassword
);
router.patch("users/:id/update-avatar", userControllers.editAvatar);
router.delete("/users/:id", userControllers.deleteUser);

// Athentification
router.post("/login", userControllers.readByEmail);
router.get("/me", verifyToken, userControllers.readById);
router.post("/logout", userControllers.logout);

// Route travel
router.get("/travels", travelController.browse);
router.get("/travels/:id", travelController.read);
router.post("/travels", travelController.createByAdmin);
router.put("/travels/:id", travelController.updateByAdmin);
router.delete("/travels/:id", travelController.deleteByAdmin);

// Route booking
router.get("/bookings", bookingController.browse);
router.get("/bookings/:id", bookingController.read);
router.post("/bookings", bookingController.create);
router.get("/currents-bookings", bookingController.getAllInfo);
router.get("/bills/:id", bookingController.getFactureById);

/* ************************************************************************* */
module.exports = router;
