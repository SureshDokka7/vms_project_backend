const express = require("express");
const cors = require("cors");
const connectDB = require("../app/config/db.config");
const swaggerSetup = require("./swagger")
require("dotenv").config();

connectDB();
const app = express();

swaggerSetup(app);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/registration", require("../app/routes/volunteerRegistrationRoutes"));

module.exports = app;
