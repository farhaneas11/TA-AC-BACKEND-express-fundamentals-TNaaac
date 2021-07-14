var express = require('express')

var morgan = require('morgan');

var cookieparser = require('cookie-parser');

var app = express();

/*app.use((req,res,next)=>{
    console.log(req.method , req.url);
    next();
});
*/

app.use(morgan('dev'));

app.use(cookieparser());

app.use((req,res,next)=>{
    var count = req.cookies.count;
    console.log(req.cookies);
    if(count){
        res.cookie("count",Number(count) + 1)
    }
    else{
        res.cookie("count" , 1);
    }
    console.log(count);
    next();
})

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/contact' , (req,res)=>{
    res.send(req.body)
})

app.post('/json' , (req,res)=>{
    console.log(req.body);
})

app.listen(4000 , ()=>{
    console.log('server open');
})

