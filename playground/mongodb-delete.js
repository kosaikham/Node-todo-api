// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect Mongodb server.');
	}
	console.log('Connected to Mongodb server.');

	// deleteMany
	// db.collection('Users').deleteMany({name: 'sai'}).then((result) => {
	// 	console.log(result);
	// });
	// deleteOne

	// findOneAndDelete
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5a3ce0e6f68e3e041fa8bb79')
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});