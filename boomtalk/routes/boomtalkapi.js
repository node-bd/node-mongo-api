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

        var options = {
            url: 'http://api.boomtalk.me/voiceadda/Webservices_app/addabajiConcent.php',
            form: {productid: productid, msisdn: msisdn},
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


    // IVR Registration User API
    function ivrRegistrationUser(res, operator,
                                 package_id, msisdn, gender,
                                 age, name, profile_img,
                                 profile_voice) {

        var options = {
            url: 'http://voiceadda.com/apprqwapconsent.php',
            form: {
                package_id: package_id, msisdn: msisdn, gender: gender,
                age: age, name: name, profile_img: profile_img,
                profile_voice: profile_voice
            },
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

    // TopUP User API
    function topUpUser(res, operator, msisdn) {

        var options = {
            url: 'http://addabaji.mobi/Addabaji_AIRTEL_API/voiceaddatopup.php',
            form: {msisdn: msisdn},
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

    // UnSubscribe User API
    function unsubscribeUser(res, operator, msisdn, package) {

        var options = {
            url: 'http://voiceadda.com/appderegister.php    ',
            form: {msisdn: msisdn, package: package},
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

    // getDostID API
    function getDostID(res, operator, msisdn) {

        var options = {
            url: 'http://voiceadda.com/getdostid.php',
            form: {msisdn: msisdn},
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

    // getAvailableMinutes API
    function getAvailableMinutes(res, operator, ano, ServiceID) {

        var options = {
            url: 'http://voiceadda.com/getfreeminute.php',
            form: {ano: ano, ServiceID: ServiceID},
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

    // updateAvailableMinutes API
    function updateAvailableMinutes(res, operator, ano, ServiceID, BalanceSec,) {

        var options = {
            url: 'http://voiceadda.com/walletupdate.php',
            form: {ano: ano, ServiceID: ServiceID, BalanceSec: BalanceSec},
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