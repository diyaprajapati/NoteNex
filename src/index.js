const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const ejs = require('ejs');
const collection = require('./mongodb');

const templatePath = path.join(__dirname,'../templates');

//make public and src folder global
app.use(express.static('./public'));
app.use(express.static('./src'));
app.set('view engine', 'ejs');
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));

//
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  }));

//setup localhost for all page
app.get('/', function(req,res){
    res.render('start');
});

app.get('/login', function (req,res){
    res.render('login');
});

app.get('/signup', function (req,res){
    res.render('signup');
});

//home route
app.get('/home', function (req,res) {

    //pass the user's name to the home template
    const userName = req.session.user ? req.session.user.name : null;

    //render the home page and pass the user name
    res.render('home', {userName});
});

app.get('/notes', function(req,res) {
    res.render('notes');
});

app.get('/todo', function(req,res) {
    res.render('todo');
});

app.get('/about', function(req,res) {
    res.render('about');
});

app.get('/diary', function(req,res) {
    res.render('diary');
});

//for signup

app.post('/signup', async function (req,res) {
    const data = {
        name: req.body.name,
        password: req.body.password
    };

    try {
        //store as an array
        await collection.insertMany([data]);
        console.log('Signup successful. Redirecting to /home');

        req.session.user = {
            name: data.name,
        };

        // Redirect to the home route after successful signup
        res.redirect('/home');
    } catch (error) {
        console.error('Error during signup:', error);
        //for error handling
        res.status(500).send('Error during signup');
    }
});

//for login

app.post('/login', async function (req,res) {

    try {
        const check = await collection.findOne({name: req.body.name});

        if(check.password === req.body.password) {
            // Store the user's name in the session
            req.session.user = {
                name: req.body.name,
            };
            //redirect to home is details are correct
            res.redirect('/home');    
        }
        else {
            res.send('wrong password ');
        }
    }
    catch {
        res.send('wrong details');
    }
});

app.listen(3000,() => {
    console.log("port connected");
})