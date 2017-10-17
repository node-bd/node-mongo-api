module.exports = function (express, app) {
    // var router = express.Router();
    // For Any other Routes
    app.use(function (req, res, next) {
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            //res.render('404', {url: req.url});
            res.send('404 Not Found');
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({error: '404 Not Found'});
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('404 Not Found');
    });

};


