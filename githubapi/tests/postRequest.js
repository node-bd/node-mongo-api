var request = require('request');

function getUserDetails(user) {

    request.post({
        url: 'http://localhost:8000/githubapi/',
        form: {user: user},
    }, function (err, httpResponse, body) {
        console.log(JSON.parse(body));
    })

}

getUserDetails('netcse');
