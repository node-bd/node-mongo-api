var request = require('request');

function getUserDetails(user) {

    request.post({
        url: 'http://192.168.244.101:8000/githubapi/',
        form: {user: user},
    }, function (err, httpResponse, body) {
        console.log(JSON.parse(body));
    })

}

getUserDetails('netcse');
