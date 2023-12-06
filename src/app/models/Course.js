const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Course = new Schema({
    title: { type: String, maxLength: 255 },
    description: { type: String },
    img: { type: String },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', Course);  /// that Course is fileName, Courses is schema.
