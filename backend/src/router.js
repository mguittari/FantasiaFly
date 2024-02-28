const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userControllers module for handling user-related operations
const userControllers = require("./controllers/userControllers");
const hashPassword = require("./services/hashPassword");
const verifyToken = require("./services/verifyToken");
const upload = require("./services/upload");

// Route to get a list of users
router.get("/users", userControllers.browse);

// Route to get a specific user by ID
router.get("/users/:id", userControllers.read);

// Route to add a new user
router.post("/users", upload, hashPassword, userControllers.create);

router.patch("/users/:id", userControllers.edit);
router.patch(
  "/users/:id/update-password",
  hashPassword,
  userControllers.editPassword
);

router.delete("/users/:id", userControllers.deleteUser);

// Athentification
router.post("/login", userControllers.readByEmail);
router.get("/me", verifyToken, userControllers.readById);
router.post("/logout", userControllers.logout);

/* ************************************************************************* */

module.exports = router;
