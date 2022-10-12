const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8000, () => {
  console.log(`Server running on port ${8000}`);
});
