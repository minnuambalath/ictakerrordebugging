const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://minnuambalath:minnu123@cluster0.tqvko.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;