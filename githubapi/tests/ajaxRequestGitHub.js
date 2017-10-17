var ajaxRequest = require('ajax-request');

ajaxRequest({
    url: 'http://localhost:8000/githubapi/',
    method: 'GET',
    data: {'user': 'netcse'},
    headers: {'User-Agent': 'Mozilla/5.0'}
}, function (err, res, body) {
    console.log(JSON.parse(body));
});


