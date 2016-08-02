var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var http = require('http');
var routes = require('./routes/');
var app = express();
app.use(express.static('public'));

app.use('/', routes);

app.listen(3000, function(){
  console.log("server listening");
});

app.use(function (request, response, next) {
    console.log("This request\'s method:"+request.method);
    next();
});

app.get('/', function(request, response) {
  response.send("Welcome!");
});

app.get('/news', function(request, response) {
  response.send("This is the news page!");
});

app.use('/special/', function (request, response, next) {
    console.log("this is in the special area's sub folders!");
    console.log("Special //This request\'s method: "+request.method);
    next();
});

app.get('/special', function(request, response, next) {
  response.send("you reached the special area.");
});

app.get('/special/subpath', function(request, response,next) {
  response.send("you reached the special area. - subpath");
});

swig.setDefaults({ cache: false });

app.set('views', __dirname + '/views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); // when giving html files to res.render, tell it to use swig

app.get('/views', function(request, response, next) {
  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  response.render('index', {title: 'Hall of Fame', people: people} );
});

app.get('/',function(request, response, next){
  response.readFile(path.join(__dirname, '../public','/stylesheets/style.css'));
});








