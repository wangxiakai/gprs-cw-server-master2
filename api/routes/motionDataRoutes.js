module.exports = function(app) {
  var sensorData = require('../controllers/motionDataController');

  app.route('/api/motion')
    .get(sensorData.list_all_sensorData)
    .post(sensorData.create_sensorData);
  
  app.route('/api/motion/:sensorDataId')
    .get(sensorData.read_sensorData)
    .delete(sensorData.delete_sensorData);
};
