const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    text: String,
    questionId: String
})

module.exports = mongoose.model('Answer', answerSchema);