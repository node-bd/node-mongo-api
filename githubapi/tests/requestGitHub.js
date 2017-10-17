var fs = require('fs');
var request = require('request');

var configJSON = JSON.parse(fs.readFileSync('./tests/apiGitHub.json', 'utf8'));


function gitHubTestRequest() {

    var options = {
        url: configJSON.api.netcse,
        headers: {
            'User-Agent': 'request'
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info);
        }
    }

    request(options, callback);
}

gitHubTestRequest();
