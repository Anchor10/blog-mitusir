var mongoose = require('mongoose');

module.exports = new mongoose.Schema({

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    views:{
        type: Number,
        default: 0
    },
    comments:[{
        body:String,
        date: Date
    }]
})