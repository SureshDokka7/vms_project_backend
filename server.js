const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./app/config/db.config");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", require("./app/routes/volunteerRegistrationRoutes"));

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Welcome to Volunteer Registration API"));
app.get("*", (req, res) => res.send("404 Page Not Found"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
