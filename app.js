var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//Hypher installed from https://github.com/bramstein/hypher 
var Hypher = require('hypher');
english = require('hyphenation.en-us');
h = new Hypher(english);

var app = express(); 
// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// use middleware

app.use(bodyParser());
var desc =[];
var a = [];
var todoItems =  [
		 { id: 1, desc: 'test'}
		 ];


// define routes
app.get('/', function(req, res) {

	res.render('index', {
		title: 'My App', 
		items: todoItems
	});
});

app.get('/hello', function(req, res) {
	console.log('HELLO WORLD');
    	res.render('index', {
		title: 'Hello', 
		items: todoItems
	});
});


app.post('/add', function(req, res) {
	var newItem = req.body.newItem;
	todoItems.push({
		id:  todoItems.length + 1,
		desc: h.hyphenate(newItem)
			    });
		for(i = 0; i < desc.length; i++){
	 		a[i] = desc[i];
	 	}
	 	desc = []; 


	console.log(todoItems);

	res.redirect('/');
});

app.listen(1337, function() {
	console.log('ready on port 1337');
}); 
