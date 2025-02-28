const asyncHandler = require("express-async-handler");
const { registerUser, loginUser } = require("../services/volunteerRegistrationService");

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await registerUser(name, email, password);
  res.status(201).json(user);
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await loginUser(email, password);
  res.json(result);
});
