const mongoose = require('mongoose');
const {Schema} = mongoose;

const studSchema = new Schema({
  name: String,
  regNo: Number,
  marks: Number,
});

module.exports = mongoose.model('Student', studSchema,"SL-Lab-Students");