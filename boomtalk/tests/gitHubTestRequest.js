function gitHubTestRequest() {
    var request = require('request');

    var options = {
        url: 'https://api.github.com/users/netcse',
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
