const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('tiny')); // create "middleware" display error at terminal

// 1. Template handlebars
const path = require('path');
const hbsExt = require("express-handlebars");
app.engine('.hbs', hbsExt.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// connect Db successfully.
const db = require('./config/db');
db.connect();


// 2. Template pug
// const path = require('path');
// const pug = require("pug");
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'resource/views'));

// Những thứ này dùng để submit form.
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5 // app file img....
const upload = multer() // for parsing multipart/form-data
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// Route 
const route = require('./resource/routes');

// Sử dụng cho scss active.
app.use('/node_modules', express.static('node_modules'));

route(app); // run route 

app.listen(8000)  // Listen port for express run 

