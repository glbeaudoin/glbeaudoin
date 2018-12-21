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
// Main website GET (END)

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index.html', function(req,res){
    res.send('Hello World');
});
/*
var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }

});

function displayForm(res) {
    fs.readFile('public/index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        /*Store the data from the fields in your data store.
        The data store could be a file or database or any other store base on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            answers: fields,
            files: files
        }));
    });
}

server.listen(5000);
console.log("server listening on 5000");*/