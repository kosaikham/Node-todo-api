const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123';

// bcrypt.genSalt(10, (err, res) => {
// 	bcrypt.hash(password, res, (err, hash) => {
// 		console.log(hash);
// 	});
// });

var hashPwd = '$2a$10$rDavav2qZguD0Scdx0hyAut.j.DHQ4esIZoUA15vcruo0JpBqx80G';

bcrypt.compare(password, hashPwd, (err,res) => console.log(res));

// var token = jwt.sign({id: 10}, 'secret');
// var decoded = jwt.verify(token, 'secret');
// console.log(token);
// console.log('decoded: ',decoded);

// var message = "hello world";
// var hash = SHA256(message).toString();

// var data = {
// 	id: 10
// };

// var token = {
// 	data,
// 	hash : SHA256(JSON.stringify(data) + 'somedata').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();

// var resHash = SHA256(JSON.stringify(token.data) + 'somedata').toString();

// if(resHash === token.hash){
// 	console.log('Success');
// }else{
// 	console.log('Fail. Do not trust');
// }






