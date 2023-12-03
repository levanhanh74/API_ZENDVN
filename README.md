# Một số công cụ cài cho NodeJS chaỵ lên server.
1. Thư viện ExpressJS là dùng làm server chạy.
    - Git (https://github.com/expressjs/express).
    - Express: https://expressjs.com/en/starter/installing.html
    + Command install express JS : npm i express.
    Ví dụ tạo Hello World.
    * s1. npm init // Điền thêm thông tin cần vào...
    * s2. npm i express 
    * s3. tạo cấu trúc file 
        src
            - public
                    - css
                        - style.css
            - resource
                    - scss  
                        - style.scss
                    - views
                        - layouts
                            - main.hbs
                        - patials
                            - header.hbs
                            - footer.hbs
                        - home.hbs
            - index.js or server.js
    * s4. Vào file index.js
        const express = require('express');
        const app = express();

        app.get('/', (req, res)=>{
            res.send("Hello world");
        })
        app.listen(3000);
    * S5. node index.js
2. thư viện NodeMon dùng để auto run UI (https://github.com/remy/nodemon).
    * s1. npm i nodemon
    * s2. into file package.json
            "script": {
                "start":  "nodemon --inspect src/index.js"
            }
3. Morgan dùng để hiển thị lỗi khi code (https://github.com/expressjs/morgan).
    * s1.   npm i morgan 
    * s2.   const morgan = require('morgan');
                app.use(morgan('tiny')); // create "middleware" display error at terminal
4. Dùng template Pug or handlebars để build UI.
    * s1. npm i express-handlebars
    * s2.   const handlebars = require('express-handlebars');
                const path = require('path');
                app.engine('.hbs', handlebars.engine({extname: ".hbs"}));
                app.set('view engine', '.hbs');
                app.set('views', path.join(__dirname, "resource/view"))

                app.get('/',(req, res)=>{
                    res.render('home');
                } );
5. Sử dụng sass để stylish for UI (https://www.npmjs.com/package/node-sass).
    * s1. npm i sass
    * s2. into file package.json 
        structure: node-sass [options] <input> [output] Or: cat <input> | node-sass > output <"Chú ý xem cách cài và các option của tool">
        "scripts": {
            "scss": "sass --watch src/resource/scss/style.scss src/public/css/style.css"
        },
    * s3. npm run scss.
    
