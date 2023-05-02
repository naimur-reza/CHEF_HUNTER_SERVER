const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const chef = require("./data/chef.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get(`/recipe/:id`, (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = chef.find((recipe) => recipe.id === id);
  res.send(recipe);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
