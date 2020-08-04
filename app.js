let express = require('express'),
bodyParser = require('body-parser'),
app = express(),
port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render("main/landing");
});

app.get('/services',function(req,res){
    res.render("main/services");
});

app.get('/booking',function(req,res){
    res.render("main/booking");
});

app.get('/products', function(req, res) {
    res.render("main/products");
});

app.get('/more',function(req,res){
    res.render("main/more");
});

app.listen(port,function(){
    console.log("Server Started Ankush..!!");
});
