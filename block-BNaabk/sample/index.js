var express = require('express')

var app = express();

app.get('/',(req ,res)=>{
    res.send('welcome')
})

app.listen(4000 , ()=>{
    console.log('server open')
})