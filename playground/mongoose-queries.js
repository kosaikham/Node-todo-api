const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a3d37a10f214fc8070aef90';
// var id = '5a3e56de5f9da16c0e8da2a0';
// if(!ObjectID.isValid(id)){
// 	console.log('Id not valid');
// }
// Todo.find({
// 	_id: id
// }).then((todos) => console.log('Todos:', todos));

// Todo.findOne({
// 	_id: id
// }).then((todo) => console.log('Todos:', todo));

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found.');
// 	}
// 	console.log('Todo by Id:', todo);
// });

User.findById(id).then((user) => {
	if(!user){
		return console.log('User not found');
	}
	console.log('User: ', user);
},(e) => console.log(e));



