const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    text: String,
    subtopicId: String
})

module.exports = mongoose.model("Question", questionSchema);
