const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    title: String,
    description: String,
    startTime: Date,
    endTime: Date,
    zoomRoomId:String,
    organizerUserId: String,
    participants: [String]
});

const Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting;
