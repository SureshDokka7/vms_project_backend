const app = require("./app/app");
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the Volunteer Registration API");
});
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));
