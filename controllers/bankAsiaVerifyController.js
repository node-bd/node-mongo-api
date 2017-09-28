var exec = require('child_process').exec;

var cmd = 'C:\\Tools\\php\\php.exe' + ' ' + 'D:\\Codes\\phpdbg\\SoapVerify.php';


module.exports = function (app) {

    app.get('/bankAsiaVerify', function (req, res) {
        exec(cmd, function (error, stdout) {
            console.log(stdout);
            res.send(stdout);
        });
    });

};