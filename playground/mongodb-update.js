// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect Mongodb server.');
	}
	console.log('Connected to Mongodb server.');

	//findOneAndUpdate
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a3cd342f1795403a2de76b7')
	},{
		$set: {
			name: 'sai'
		},
		$inc: {
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result) => console.log(result));

	// db.close();
});