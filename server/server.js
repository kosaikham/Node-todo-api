const express = require('express');
const bodyParser = require('body-parser');

// db connect
var {mongoose} = require('./db/mongoose');
// Todo Model
var {Todo} = require('./models/todo');
// User Model
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})
});

app.listen(3000, () => console.log('Server is up on 3000'));












