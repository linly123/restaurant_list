const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const Rest = require("./models/rest");
const mongoose = require("mongoose");
const methodOverried = require("method-override");

const app = express();
// mongooseß
mongoose.connect("mongodb://localhost/restaurant-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", () => {
  console.log("mongoose error");
}); //fail
db.once("open", () => {
  console.log("mongoose connected");
});

// setting template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// setting static files
app.use(express.static("public"));

//use method override
app.use(methodOverried("_method"));

// render all restaurant
app.get("/", (req, res) => {
  Rest.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then((rests) => res.render("index", { rests })) // 將資料傳給 index 樣板
    .catch((error) => console.error(error)); // 錯誤處理
});

//新增一筆restaurant page
app.get("/restaurant/new", (req, res) => {
  return res.render("new");
});

// 新的路由用作接住表單資料
app.post("/restaurant", (req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const rating = req.body.rating;
  const image = req.body.image;
  console.log("name", name);
  return Rest.create({ name, category, rating, image }) // 存入資料庫
    .then(() => res.redirect("/")) // 新增完成後導回首頁
    .catch((error) => console.log(error));
});

// 瀏覽特定資料
app.get("/restaurant/:id", (req, res) => {
  const id = req.params.id;
  return Rest.findById(id)
    .lean()
    .then((rest) => res.render("show", { rest }))
    .catch((error) => console.log(error));
});

// 修改特定資料:get
app.get("/restaurant/:id/edit", (req, res) => {
  const id = req.params.id;
  return Rest.findById(id)
    .lean()
    .then((rest) => res.render("edit", { rest }))
    .catch((error) => console.log(error));
});

// 修改特定資料:post
app.put("/restaurant/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const category = req.body.category;
  const rating = req.body.rating;
  const image = req.body.image;
  console.log("name", name);
  console.log("id", id);
  return Rest.findById(id)
    .then((rest) => {
      rest.name = name;
      rest.category = category;
      rest.rating = rating;
      rest.image = image;
      return rest.save();
    })
    .then(() => res.redirect(`/restaurant/${id}`))
    .catch((error) => console.log(error));
});

//刪除特定資料
app.delete("/restaurant/:id", (req, res) => {
  const id = req.params.id;
  return Rest.findById(id)
    .then((rest) => rest.remove())
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

app.listen(3000, () => {
  console.log(`this is running on http://localhost:3000`);
});

app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  const restaurant = restaurantList.results.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  );
  res.render("index", { restaurant: restaurant, keyword: keyword });
});
