var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res){


})

app.listen(8080);
console.log('Server is listening on port 8080');