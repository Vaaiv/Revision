const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imageUrl: String,
    caption: String,
});

const postmodel = mongoose.model('Post', postSchema);

module.exports = postmodel;
