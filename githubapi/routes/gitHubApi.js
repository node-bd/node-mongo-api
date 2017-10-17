module.exports = function (express, app, bodyParser, request, configJSON) {

    var router = express.Router();
    var urlencodedParser = bodyParser.urlencoded({extended: false});

    function getUserDetails(user, res) {

        console.log(user);
        console.log(configJSON.api[user]);

        var options = {
            url: configJSON.api[user],
            headers: {
                'User-Agent': 'request'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                res.send(info);
            }
        }

        request(options, callback);
    }

    router.get('/', function (req, res, next) {

        var data = req.query;

        console.log(data.user);

        getUserDetails(data.user, res);

        // res.send(response);

        //res.json(data);

    });

    router.post('/', urlencodedParser, function (req, res, next) {

        var data = req.body;

        console.log(data.user);

        getUserDetails(data.user, res);

        // res.send(response);

        //res.json(data);
    });

    app.use('/githubapi', router);
};