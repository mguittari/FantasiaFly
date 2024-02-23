const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userControllers module for handling user-related operations
const userControllers = require("./controllers/userControllers");

// Route to get a list of users
router.get("/users", userControllers.browse);

// Route to get a specific user by ID
router.get("/users/:id", userControllers.read);

// Route to add a new user
router.post("/users", userControllers.add);

router.patch("/users/:id", userControllers.edit);
router.patch("/users/:id/update-password", userControllers.editPassword);

router.delete("/users/:id", userControllers.deleteUser);

/* ************************************************************************* */

module.exports = router;
