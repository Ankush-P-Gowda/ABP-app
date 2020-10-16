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

app.get('/services/bleach',function(req,res){
    res.render("main/bleach");
});

app.get('/services/antitan',function(req,res){
    res.render("main/antitan");
});

app.get('/services/facial',function(req,res){
    res.render("main/facial");
});

app.get('/services/haircut',function(req,res){
    res.render("main/haircut");
});

app.get('/services/haircolor',function(req,res){
    res.render("main/haircolor");
});

app.get('/services/pedicure',function(req,res){
    res.render("main/pedicure");
});

app.get('/services/manicure',function(req,res){
    res.render("main/manicure");
});

app.get('/services/haircare',function(req,res){
    res.render("main/haircare");
});
app.get('/booking',function(req,res){
    res.render("main/booking");
});

app.post('/booking',function(req,res){
    console.log(req.body);
    const number = +919686602801;
    const link = "https://api.whatsapp.com/send?phone=" + number + "&text=Name:" + req.body.name + "\nRequested Date:" + req.body.sdate + " to " + req.body.ldate + "\nTimings:" + req.body.time + "\nServices:" + req.body.services + "&source=&data=&app_absent=";
    res.redirect(link);
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
