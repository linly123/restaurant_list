//引用Express 與 Express 路由器
const express = require("express");
const router = express.Router();

// 引用Rest model, render all restaurant
const Rest = require("../../models/rest");
router.get("/", (req, res) => {
  Rest.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then((rests) => res.render("index", { rests })) // 將資料傳給 index 樣板
    .catch((error) => console.error(error)); // 錯誤處理
});

router.get("/asc", (req, res) => {
  Rest.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ name: "asc" })
    .then((rests) => res.render("index", { rests })) // 將資料傳給 index 樣板
    .catch((error) => console.error(error)); // 錯誤處理
});

router.get("/desc", (req, res) => {
  Rest.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ name: "desc" })
    .then((rests) => res.render("index", { rests })) // 將資料傳給 index 樣板
    .catch((error) => console.error(error)); // 錯誤處理
});

router.get("/category", (req, res) => {
  Rest.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ category: "asc" })
    .then((rests) => res.render("index", { rests })) // 將資料傳給 index 樣板
    .catch((error) => console.error(error)); // 錯誤處理
});

router.get("/location", (req, res) => {
  Rest.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ location: "asc" })
    .then((rests) => res.render("index", { rests })) // 將資料傳給 index 樣板
    .catch((error) => console.error(error)); // 錯誤處理
});

//search restaurant
router.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  Rest.find({ name: { $regex: keyword, $options: "i" } })
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then((rests) => res.render("index", { rests })) // 將資料傳給 index 樣板
    .catch((error) => console.error(error)); // 錯誤處理
});

module.exports = router;
