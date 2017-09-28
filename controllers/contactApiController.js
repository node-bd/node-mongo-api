var exec = require('child_process').exec;

var cmd = 'C:\\Tools\\php\\php.exe' + ' ' + 'D:\\rnd\\node.js\\webapi\\curlpost.php';

module.exports = function (app) {

    app.get('/contactApi', function (req, res) {
        exec(cmd, function (error, stdout) {
            console.log(stdout);
            res.send(stdout);
        });
    });

};