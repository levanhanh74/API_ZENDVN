const express = require("express");
const route = express.Router();

const FormController = require('../../app/controllers/FormController');
const multer = require("multer");

// Multer configuration
const storage = multer.memoryStorage(); // Use memory storage (you can change this based on your needs)
const upload = multer({ storage: storage });
route.use("/post",upload.single('img'), FormController.post);

route.use('/detail/:id', FormController.detail);
// Cái / Này phải được dưới cùng vì code nó đọc từ trên xuống nên học match dưới đúng thì nó hiển thị. 
route.use('/', FormController.index);

module.exports = route;