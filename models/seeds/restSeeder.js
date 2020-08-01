const mongoose = require("mongoose");
const Rest = require("../rest");
const seedData = require("./restaurant.json");

mongoose.connect("mongodb://localhost/restaurant-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("mongoose connected");

  Rest.create(seedData.results).then(() => {
    db.close();
  });

  console.log("done");
});
