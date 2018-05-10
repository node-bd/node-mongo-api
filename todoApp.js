var express = require('express');
var mongoose = require('mongoose');

var todoController = require('./controllers/todoController');

var app = express();

// setup template engine
app.set('view engine', 'ejs');

// static files
// localhost:80/assets/style.css
app.use(express.static('./public'));


// mongoose connect
// mongodb://<dbuser>:<dbpassword>@ds147454.mlab.com:47454/todos

// mongoose.connect('mongodb://test:test@ds147454.mlab.com:47454/todos');
//
// var todoSchema = new mongoose.Schema({
//    item: String
// });
//
// var Todo = mongoose.model('Todo', todoSchema);

// var itemOne = Todo({item: 'NodeJS MongoDB High Scalability'}).save(function (err) {
//     if(err) throw err;
//     console.log('Item Saved');
// });


// Fire Controllers
todoController(app);

// listening port 8888
app.listen(8888);

console.log('You are listening to port 8888');
