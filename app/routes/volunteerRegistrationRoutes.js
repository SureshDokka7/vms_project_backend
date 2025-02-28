const express = require("express");
const registrationController = require("../controllers/volunteerRegistrationController");

const router = express.Router();

router.post("/register", registrationController.register);
router.post("/login", registrationController.login);

module.exports = router;
