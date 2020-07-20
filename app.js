const express = require("express");
const app = express();
const restaurantList = require("./restaurant.json");
const port = 3000;

// require express-handlebars here
const exphbs = require("express-handlebars");
const { request } = require("express");

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

// render all restaurant
app.get("/", (req, res) => {
  res.render("index", { restaurant: restaurantList.results });
});

app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  const restaurant = restaurantList.results.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  );
  res.render("index", { restaurant: restaurant, keyword: keyword });
});

// render one restaurant
app.get("/restaurants/:restaurant_id", (req, res) => {
  const restaurant = restaurantList.results.find(
    (restaurant) => restaurant.id == req.params.restaurant_id
  );
  res.render("show", { restaurant: restaurant });
});

app.listen(port, () => {
  console.log(`this is running on http://localhost:${port}`);
});
