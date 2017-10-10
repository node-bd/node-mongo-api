module.exports = function (express, app) {
    var router = express.Router();
    var data = {pageTitle: 'Page Title'};
    console.log(data.pageTitle);

    var dataArray = [{pageTitle: 'Page Title'}];
    console.log(dataArray[0].pageTitle);

    router.get('/', function (req, res, next) {
        res.render('index', {data: data});
    });

    router.get('/chatrooms', function (req, res, next) {
        res.render('index', {data: data});
    });

    app.use('/', router);

    app.use(function (req, res, next) {
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            res.render('404', {url: req.url});
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({error: 'Not found'});
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    });

};
















