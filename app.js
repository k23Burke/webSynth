var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res, next) {
	// console.log('OLD')
	// res.sendFile(__dirname + '/index.html');
	res.sendFile(__dirname + '/new.html');
});
app.get('/new', function (req, res, next) {
	console.log('SHOW NEW!!!!!')
});

var server = app.listen(process.env.PORT || 3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
