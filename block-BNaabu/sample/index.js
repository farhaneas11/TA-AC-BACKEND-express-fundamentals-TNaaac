var express = require('express');
var app = express();
var morgan = require('morgan');


app.use(morgan('dev'))

app.use((req,res,next)=>{
    console.log(req.method ,req.url);
    if (req.url === "/admin") {
        return next("Unauthorized");
    }
      // other let it pass to next middleware by simply calling next()
    next();
})

app.get('/' , (req,res)=>{
    console.log('Welcome');
})

app.get('/about' , (req,res)=>{
    console.log('About page');
})


app.listen(4000,()=>{
    console.log('server open');
})