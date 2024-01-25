const mongoose = require('mongoose');

const zoomRoomAccountSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    features: [String],
    availabilityStatus: String
});

const zoomRoomAccount = mongoose.model('ZoomRoom', zoomRoomAccountSchema);
module.exports = zoomRoomAccount;
