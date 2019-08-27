var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/orders.db');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/src'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(request, response){
	response.send('Hellow, World');
});

app.get('/record', function(request, response){
	console.log('get function works');
	db.all('SELECT * FROM orders', function(err, rows){
		if(err){
			console.log("Error: " + err);
		}
		else{
			response.send(rows);
		}
	})
});

app.post('/record', function(request, response){
	console.log('post function works');
	db.run('INSERT INTO orders VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', 
	[request.body.name, request.body.size, request.body.phonenumber, request.body.shoes1, request.body.shoes1quantity, request.body.shoes2, request.body.shoes2quantity, request.body.shoes3, request.body.shoes3quantity, request.body.shoes4, request.body.shoes4quantity, request.body.shoes5, request.body.shoes5quantity], function(err){
		if(err){
			console.log("Error:" + err);
		}
		else{
			response.status(200).redirect('index.html');
		}
	})
});


app.listen(3000, function(){
	console.log("Server is running on port 3000");
});