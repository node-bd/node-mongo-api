var ajaxRequest = require('ajax-request');

ajaxRequest({
    url: 'http://192.168.244.101:8000/boomtalkapi/',
    method: 'GET',
    data: {'user': 'netcse'},
    headers: {'User-Agent': 'Mozilla/5.0'}
}, function (err, res, body) {
    console.log(JSON.parse(body));
});


