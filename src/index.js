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

// 2. Template pug
// const path = require('path');
// const pug = require("pug");
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'resource/views'));

console.log(path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {

    res.render('home');
});



app.listen(8000)

