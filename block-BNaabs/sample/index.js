var express = require('express');
var morgan = require('morgan');
var cookieparser = require('cookie-parser');
const { json } = require('express');

var app = express();


app.use(morgan('dev'));

app.use((req,res,next)=>{
    console.log(req.method , req.url);
    next();
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + '/new.html')
})

app.post('/new',(req,res)=>{
    var store = '';
    req.on('data' ,(chunk)=>{
        store+=chunk;
    })
    var parseData = JSON.parse(store);
    console.log(res.send(parseData));
})

app.use('/user' , (req,res)=>{
    console.log(req.query);
    res.json(req.query);
})

app.get('/users/:username' , (req,res)=>{
    var username = req.params.username;
    res.send(username);
})

app.listen(4000 , ()=>{
    console.log('server open'); 
})