const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LoginSignup')
.then(() => {
    console.log('mongodb connected');
})
.catch(() => {
    console.log('failed to connect');
})

const LogInSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    } ,
    password: {
        type: String,
        require: true
    }
})

const collection = new mongoose.model('Collection1', LogInSchema);

module.exports = collection;