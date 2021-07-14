var express = require('express');
var morgan = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log(req.method , req.url);    
    next();
})



app.post('/form' ,(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.post('/json' ,(req,res)=>{
    console.log(req.body);
    res.json(req.body);
})

app.get('/',(req,res)=>{
    res.send(`<h2>Welcome to Express</h2>`)
})

app.get('/about' , (req,res)=>{
    res.send('my name is qwerty');
})

app.use((err,req,res,next)=>{
    res.status(500).send(err);
})

app.use((req,res,next)=>{
    res.send('page not found')
})

app.listen(4000,()=>{
    console.log('server open');
})
