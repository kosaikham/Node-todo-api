const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp');
 // || 'mongodb://localhost:27017/TodoApp'
// mongodb://saikham:123mlab@ds163806.mlab.com:63806/saikham

module.exports = {
	mongoose
};