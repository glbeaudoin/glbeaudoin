var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var fs = require('fs');
var request = require('request');

var app = express();

var PORT = process.env.PORT || 5000

// View Engine (START)
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'public'));
app.listen(PORT, () => console.log(`EJS displayed at port ${ PORT }`))
// View Engine (END)

// Global variables (START)
app.use(function(req, res, next){
  res.locals.errors = null;
  next();
});
// Global variables (END)


// Set Static Path (EJS,CSS,jquery,etc.) (START)
app.use(express.static(path.join(__dirname, 'public')))
// Set Static Path (EJS,CSS,jquery,etc.) (END)


// Main website GET (START)
app.get('/', function(req, res){
    //render EJS
    res.render('index.ejs', {
        //render variables
    });
  });

app.get('/createsurvey', function(req, res){
    //render EJS
    res.render('createsurvey.ejs', {
        //render variables
    });
  });

app.get('/takesurvey', function(req, res){
    //render EJS
    res.render('takesurvey.ejs', {
        //render variables
    });
  });
// Main website GET (END)

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index.html', function(req,res){
    res.send('Hello World');
});