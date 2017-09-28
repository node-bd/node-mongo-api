var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nopass',
    database: 'easypayw_core'
});

connection.connect((err) => {
    if (err) throw err;
console.log('Connected!');
});

module.exports = function (app) {

    app.get('/bankcount', function (req, res) {

        var result;

        connection.query('select count(*) as solution from a_paymentactivity', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
            // res.send(results[0].solution);
            // res.sendStatus(200);
            result = results[0].solution;
            res.send(result.toString());
        });

    });


    app.get('/bankcards', function (req, res) {

        var result;

        connection.query(' select distinct(card) from m_rates;', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
            // res.send(results[0].solution);
            // res.sendStatus(200);

            // result = results.length;
            //
            // for(var i = 0; i < result.length; i++){
            //     res.send(results[i].card);
            // }



            // res.json(results);
            res.send(results);

            //res.send(result.toString());
        });

    });

    app.get('/bankpayments', function (req, res) {

        var result;

        connection.query('select * from a_paymentactivity', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results.length);
            // res.send(results[0].solution);
            // res.sendStatus(200);

            // result = results.length;
            //
            // for(var i = 0; i < result.length; i++){
            //     res.send(results[i].card);
            // }



            // res.json(results);
            res.send(results);

            //res.send(result.toString());
        });

    });

};


