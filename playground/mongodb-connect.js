// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect Mongodb server.');
	}
	console.log('Connected to Mongodb server.');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to insert data', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'sai',
		age: 22,
		location: 'mandalay'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert to Users collection', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});


	db.close();
});