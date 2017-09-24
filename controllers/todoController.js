var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var urlencodedParser = bodyParser.urlencoded({extended: false});


mongoose.connect('mongodb://test:test@ds147454.mlab.com:47454/todos');

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);


// var data = [{item: 'NodeJS Api Development'},
//     {item: 'Http GET-POST-DELETE-UPDATE'},
//     {item: 'Connect With MongoDB NoSQL'},
//     {item: 'High IO with DB'}];

module.exports = function (app) {

    app.get('/todo', function (req, res) {

        // get mongodb data and pass it to the view
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', {todos: data});
        });

    });

    app.post('/todo', urlencodedParser, function (req, res) {

        if (req.body.item !== '') {

            // get data from the view and push to db
            var newTodo = new Todo(req.body).save(function (err, data) {
                if (err) throw err;
                res.json(data);
            });
            // console.log(req.body.item);
            // data.push(req.body);
            // res.json(data);
        }
    });

    app.delete('/todo/:item', function (req, res) {

        // delete the requested item from mongodb
        Todo.find({item: req.params.item.replace(/-/g, ' ')}).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });


};