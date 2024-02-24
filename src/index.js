const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const collection = require('./mongodb');

const templatePath = path.join(__dirname,'../templates');

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));

app.get('/', function(req,res){
    res.render('Start.ejs');
});

app.get('/login', function (req,res){
    res.render('login');
});

app.get('/signup', function (req,res){
    res.render('signup');
});

app.post('/signup', async function (req,res) {
    const data = {
        email: req.body.name,
        password: req.body.password
    }
    await collection.insertMany([data]);

    res.render('home');
});

app.listen(3000,() => {
    console.log("port connected");
})