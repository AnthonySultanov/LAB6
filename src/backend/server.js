const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();
const port = 2000;
//cors rules
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});



// Data
let jsondata =
{
    books:[
    {
    "title": "Learn Git in a Month of Lunches",
    "isbn": "1617292419",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "authors": ["Rick Umali"],
    "categories": []
    },
    {
    "title": "MongoDB in Action, Second Edition",
    "isbn": "1617291609",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    "status": "MEAP",
    "authors": [
    "Kyle Banker",
    "Peter Bakkum",
    "Tim Hawkins",
    "Shaun Verch",
    "Douglas Garrett"
    ],
    "categories": []
},
{
"title": "Getting MEAN with Mongo, Express, Angular, and Node",
"isbn": "1617292036",
"pageCount": 0,
"thumbnailUrl":
"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
"status": "MEAP",
"authors": ["Simon Holmes"],
"categories": []
}
]
}
//api for books
app.get('/api/books', (req, res) =>
{
    res.json(jsondata)
})

// books route
app.post('/api/books', (req, res) =>
{

    
    console.log(req.body.title);
    console.log(req.body.authors);
    console.log(req.body.url);
})

