const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  text: String
  
}, {
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)