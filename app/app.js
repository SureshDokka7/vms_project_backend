const express = require("express");
const cors = require("cors");
const connectDB = require("../app/config/db.config");
require("dotenv").config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/register", require("../app/routes/volunteerRegistrationRoutes"));

module.exports = app;
