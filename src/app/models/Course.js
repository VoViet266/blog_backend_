const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {
        type: String, minlength: 3, maxlength: 255},
    description: {
        type: String, minlength: 3, maxlength: 600
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now
    },
    updatedAt: {
        type: Date, default: Date.now
    },
    slug: {
        type: String, unique: true, 
    },
    videoID: {
        type: String
    }
});
module.exports = mongoose.model('Course', Course)