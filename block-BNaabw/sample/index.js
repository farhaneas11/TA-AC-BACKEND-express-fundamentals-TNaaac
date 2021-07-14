var express = require('express');
var morgan = require('morgan');
var cookieparser = require('cookie-parser');


var app = express();

app.use(morgan('dev'));

app.use(cookieparser());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    console.log(req.method , req.url);
    res.cookie("username" , "feas");
    next();
})

app.get('/' , (req,res)=>{
    console.log(req.route);
    res.send(req.route);

    res.sendFile( __dirname + '/index.html')
})

app.get('/projects' , (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/users' , (req,res)=>{
    console.log(req.route);
    res.send(req.route);
})

app.listen(4000 , ()=>{
    console.log('server open');
})
