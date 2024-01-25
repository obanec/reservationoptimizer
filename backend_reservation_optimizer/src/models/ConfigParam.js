const mongoose = require('mongoose');

const configParamSchema = new mongoose.Schema({
    paramName: String,
    paramValue: String,
    description: String
});

const ConfigParam = mongoose.model('ConfigParam', configParamSchema);
module.exports = ConfigParam;
