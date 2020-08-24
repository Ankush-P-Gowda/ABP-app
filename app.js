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

app.get('/services/threading',function(req,res){
    res.render("main/threading");
});

app.get('/services/waxing',function(req,res){
    res.render("main/waxing");
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

app.get('/gallery',function(req,res){
    res.render("main/gallery");
});

app.get('/review',function(req,res){
    res.render("main/review");
});

app.get('/offers',function(req,res){
    res.render("main/offers");
});

app.get('/booked',function(req,res){
    res.render("main/booked");
});

app.listen(port,function(){
    console.log("Server Started Ankush..!!");
});
