module.exports = function (express, app, bodyParser, request) {

    var router = express.Router();
    var urlencodedParser = bodyParser.urlencoded({extended: false});


    // Handling BoomTalk Requests
    router.get('/', function (req, res, next) {

        var data = req.query;

        var action = data.action;
        var operator = data.operator;


        switch (action) {
            case 'getMSISDN':
                getMSISDN(res, operator);
                break;

            case 'SEND_OTP':
                sendOTP(res, operator, data.ano, data.message);
                break;

            //////////////////////////////////////////////
            case 'CHECK_IVR':
                checkIVR(res, operator, data.bno);
                break;

            case 'SUBSCRIBE_USER':
                subscribeUser(res, operator, data.productid, data.msisdn);
                break;

            case 'IVR_REGISTRATION_USER':
                ivrRegistrationUser(res, operator,
                    data.package_id,
                    data.msisdn,
                    data.gender,
                    data.age,
                    data.name,
                    data.profile_img,
                    data.profile_voice);
                break;

            case 'TOPUP_USER':
                topUpUser(res, operator, data.msisdn);
                break;
            /////////////////////////////////////////////////

            case 'UNSUBSCRIBE_USER':
                unsubscribeUser(res, operator, data.msisdn, data.package);
                break;

            case 'GET_DOST_ID':
                getDostID(res, operator, data.msisdn);
                break;

            case 'GET_AVAILABLE_MINUTES':
                getAvailableMinutes(res, operator, data.ano, data.ServiceID);
                break;

            case 'UPDATE_AVAILABLE_MINUTES':
                updateAvailableMinutes(res, operator,
                    data.ano,
                    data.ServiceID,
                    data.BalanceSec);
                break;

            default:
                res.send('NOT FOUND');
                break;
        }
    });

    // GET MSISDN API
    function getMSISDN(res, operator) {

        var options = {
            url: 'http://api.boomtalk.me/voiceadda/Webservices_app/getMSISDN.php',
            headers: {
                'User-Agent': 'request'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                res.send(info);
            }
        }

        request(options, callback);
    }

    // SEND OTP API
    function sendOTP(res, operator, ano, message) {

        console.log(ano);
        console.log(message);

        var options = {
            url: 'http://103.239.252.108/Voiceadda_AIRTEL_API/sendOTP.php',
            form: {ano: ano, message: message},
            headers: {
                'User-Agent': 'request'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                res.send(info);
            }
        }

        request(options, callback);
    }
    ///////////////////////////////////////////
    // checkIVR API
    function checkIVR(res, operator, bno) {

        console.log(bno);

        var options = {
            url: 'http://addabaji.mobi/Addabaji_AIRTEL_API/ivr1chk.php',
            form: {bno: bno},
            headers: {
                'User-Agent': 'request'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                res.send(info);
            }
        }

        request(options, callback);
    }


    // Subscribe User API
    function subscribeUser(res, operator, productid, msisdn) {

        console.log(bno);

        var options = {
            url: 'http://addabaji.mobi/Addabaji_AIRTEL_API/ivr1chk.php',
            form: {bno: bno},
            headers: {
                'User-Agent': 'request'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                res.send(info);
            }
        }

        request(options, callback);
    }



    app.use('/boomtalkapi', router);
};