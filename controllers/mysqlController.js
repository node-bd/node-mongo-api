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

        connection.query('select distinct(card) from m_rates;', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].card);
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


    app.get('/updateapi/:cardoption', function (req, res) {

        var result;

        connection.query('select * from b_cardoptions where cardoption = \'' + req.params.cardoption + '\'', function (error, results, fields) {
            if (error) throw error;
            console.log(req.params.cardoption);
            console.log('The solution is: ', results[0].Id);

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

    app.get('/updateapi/', function (req, res) {

        // curl http://localhost/updateapi -G -d "cardoption=QCASH&notes=IFIC%20Bank%20Bangladesh"

        var result;
        // ?cardoption=QCASH

        if (req.query.notes !== '') {
            var query = 'update b_cardoptions set notes = \''
                + req.query.notes
                + '\' where cardoption = \''
                + req.query.cardoption + '\'';

            console.log(query);

            connection.query(query, function (error, results, fields) {

                if (error) throw error;
                console.log(req.query.notes);

                // res.send(results[0].solution);
                // res.sendStatus(200);

                // result = results.length;
                //
                // for(var i = 0; i < result.length; i++){
                //     res.send(results[i].card);
                // }


                // res.json(results);
                // res.send(results);

                // res.send(result.toString());
            });
        }


        connection.query('select * from b_cardoptions where cardoption = \'' + req.query.cardoption + '\'', function (error, results, fields) {
            if (error) throw error;
            console.log(req.query.cardoption);
            console.log('The solution is: ', results[0].Id);
            res.send(results);
        });

    });

};


