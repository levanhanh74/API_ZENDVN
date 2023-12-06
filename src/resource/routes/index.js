const FormRoute = require('./form');


function Route(app) {

    app.use('/form', FormRoute);

    app.get('/', (req, res) => {
        res.render('home');
    });
}
module.exports = Route;