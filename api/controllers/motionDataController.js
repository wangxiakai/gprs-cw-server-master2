'use strict';


var mongoose = require('mongoose'),
  sensorData = mongoose.model('motionData');


exports.list_all_sensorData = function(req, res) {
  sensorData.find({}, function(err, sensorData) {
    if (err)
      res.send(err);
    res.json(sensorData);
  });
};


exports.create_sensorData = function(req, res) {
  var new_sensorData = new sensorData(req.body);
  new_sensorData.save(function(err, sensorData) {
    if (err)
      res.send(err);
    res.json(sensorData);
  });
};


exports.read_sensorData = function(req, res) {
  sensorData.findById(req.params.sensorDataId, function(err, sensorData) {
    if (err)
      res.send(err);
    res.json(sensorData);
  });
};


exports.delete_sensorData = function(req, res) {
  sensorData.remove({
    _id: req.params.sensorDataId
  }, function(err, sensorData) {
    if (err)
      res.send(err);
    res.json({ message: 'sensorData successfully deleted' });
  });
};