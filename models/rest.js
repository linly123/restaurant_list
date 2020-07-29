const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restSchema = new Schema({
  id: {
    type: Number, // 資料型別是字串
  },
  name: {
    type: String, // 資料型別是字串
    required: true, // 這是個必填欄位},
  },
  name_en: {
    type: String, // 資料型別是字串
  },
  category: {
    type: String,
    required: true, // 資料型別是字串
  },
  image: {
    type: String, // 資料型別是字串
    required: true, // 這是個必填欄位},
  },
  location: {
    type: String, // 資料型別是字串
  },
  phone: {
    type: String, // 資料型別是字串
  },
  google_map: {
    type: String, // 資料型別是字串
  },
  rating: {
    type: String, // 資料型別是字串
    required: true, // 這是個必填欄位},
  },
  description: {
    type: String, // 資料型別是字串
  },
});

module.exports = mongoose.model("Rest", restSchema);
