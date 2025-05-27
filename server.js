const app = require("./app/app");
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the Volunteer Registration API");
});
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
