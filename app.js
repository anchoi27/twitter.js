var express = require( 'express' );
var morgan = require('morgan');
var app = express();

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

app.get('/special', function(request, response,next) {
  response.send("you reached the special area.");
});

app.get('/special/subpath', function(request, response,next) {
  response.send("you reached the special area. - subpath");
});
