const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const methodOverried = require("method-override");

const routes = require("./routes");
const rest = require("./models/rest");
const app = express();
// mongoose
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

app.use(routes);

app.listen(3000, () => {
  console.log(`this is running on http://localhost:3000`);
});
