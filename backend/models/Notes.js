// const { Router } = require('express');
const mongoose=require('mongoose');

const { Schema } = mongoose;

const NotesSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  discription:{
    type: String,
    required: true,
    unique: true
  },
  date:{
    type: Date,
    default:Date.now
  }

});


module.exports = mongoose.model('user',NotesSchema);