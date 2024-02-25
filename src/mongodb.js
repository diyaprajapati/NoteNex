const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LoginSignup')
.then(() => {
    console.log('mongodb connected');
})
.catch(() => {
    console.log('failed to connect');
})

//login schema
const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    } ,
    password: {
        type: String,
        require: true
    }
})

//dairy schema
const DiarySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    pages: [
        {
            pageNumber: {
                type: Number,
                required: true,
            },
            content: {
                type: String,
                default: "", // Initial content for a page
            },
        },
    ],
});


const collection = new mongoose.model('Collection1', LogInSchema);

module.exports = collection;