curl = require('node-curl');

module.exports = function (app) {

    app.get('/fileupload', function (req, res) {
        curl('localhost:8000/upload.php', {
            MULTIPART: [
                {name: 'fileToUpload', file: '‪D:\\epw.jpg', type: '"image/jpeg"'},
                {name: 'sumbit', contents: 'send'}
            ]
        }, function(e) {
            console.log(e);
            console.log(this.body);
            this.close()
        });
    });

};