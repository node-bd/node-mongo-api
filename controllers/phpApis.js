var exec = require('child_process').exec;

var phpPath = 'C:\\Tools\\php\\php.exe';

module.exports = function (app) {


    app.get('/phpapi/fetch', function (req, res) {

        var cmd = phpPath + ' ' + 'D:\\Codes\\phpdbg\\fetchData.php?a=b';

        exec(cmd, function (error, stdout) {
            console.log(stdout);
            res.send(stdout);
        });
    });


    app.get('/phpapi/update', function (req, res) {

        console.log(req.query.location);

        var cmd = phpPath +
            ' ' + 'D:\\Codes\\phpdbg\\update.php';

        exec(cmd, function (error, stdout) {
            console.log(stdout);
            res.send(stdout);
        });
    });

};