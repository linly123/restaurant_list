const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restSchema = new Schema({
  name: {
    type: String, // 資料型別是字串
    required: true, // 這是個必填欄位},
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
    required: true, // 這是個必填欄位},
  },
  phone: {
    type: String, // 資料型別是字串
    required: true, // 這是個必填欄位},
  },
  rating: {
    type: String, // 資料型別是字串
    required: true, // 這是個必填欄位},
  },
  description: {
    type: String, // 資料型別是字串
    required: true, // 這是個必填欄位},
  },
});

module.exports = mongoose.model("Rest", restSchema);
