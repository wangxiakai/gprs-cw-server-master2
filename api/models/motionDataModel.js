'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var motionSchema = new Schema({
  id: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  reading: {
    type: Number,
    default: 999
  }
});

module.exports = mongoose.model('motionData', motionSchema);