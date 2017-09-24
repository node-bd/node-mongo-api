var express = require('express');
var router = express.Router();

router.post('/contact', function (req, res) {
    console.log(req.body);
    res.render('echoejs', {data: req.body});
});


router.get('/contact', function (req, res) {
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

module.exports = router;

