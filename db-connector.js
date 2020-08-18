const mongoose = require('mongoose');
mongoose.connect('mongodb://test:testtest@test.mlab.com:27801/s9test');

module.exports = mongoose.connection;