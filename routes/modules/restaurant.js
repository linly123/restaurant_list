//引用Express 與 Express 路由器
const express = require("express");
const router = express.Router();

// 引用Rest model
const Rest = require("../../models/rest");

//新增一筆restaurant page
router.get("/new", (req, res) => {
  return res.render("new");
});

// 新的路由用作接住表單資料
router.post("/", (req, res) => {
  const {
    name,
    category,
    rating,
    image,
    location,
    description,
    phone,
  } = req.body;
  return Rest.create({
    name,
    category,
    rating,
    image,
    location,
    description,
    phone,
  }) // 存入資料庫
    .then(() => res.redirect("/")) // 新增完成後導回首頁
    .catch((error) => console.log(error));
});

// 瀏覽特定資料
router.get("/:id", (req, res) => {
  const id = req.params.id;
  return Rest.findById(id)
    .lean()
    .then((rest) => res.render("show", { rest }))
    .catch((error) => console.log(error));
});

// 修改特定資料:get
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  return Rest.findById(id)
    .lean()
    .then((rest) => res.render("edit", { rest }))
    .catch((error) => console.log(error));
});

// 修改特定資料:post
router.put("/:id", (req, res) => {
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
    .then(() => res.redirect(`/${id}`))
    .catch((error) => console.log(error));
});

//刪除特定資料
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  return Rest.findById(id)
    .then((rest) => rest.remove())
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

module.exports = router;
