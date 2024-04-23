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

async function getNextAvailabilityForRoom(zoomRoomId) {
    const oneHourLater = new Date();
    oneHourLater.setHours(oneHourLater.getHours() + 1); 
  
    const meetings = await Meeting.find({
      zoomRoomId,
      $or: [
        {
          startTime: { $gte: new Date() },
          endTime: { $lte: oneHourLater }
        },
        {
          startTime: { $lte: new Date() },
          endTime: { $gte: oneHourLater }
        }
      ]
    }).sort({ endTime: 1 }).lean().exec();
  
    if (meetings.length === 0) {
      return new Date();
    }
  
    const currentTime = new Date();
  
    for (const meeting of meetings) {
      if (new Date(meeting.endTime) > currentTime) {
        return new Date(meeting.endTime);
      }
    }
  
    return new Date(meetings[meetings.length - 1].endTime);
  }

meetingSchema.pre('save', async function(){
    const doExist = await Meeting.find({
        $or: [
          {
            startTime: { $gte: this.startTime, $lte: this.endTime }
          },
          {
            endTime: { $gte: this.startTime, $lte: this.endTime }
          },
          {
            startTime: { $lte: this.startTime },
            endTime: { $gte: this.endTime }
          }
        ],
        zoomRoomId: this.zoomRoomId
      }).lean().exec();
      if(doExist.length){
        const nextAvailability = await getNextAvailabilityForRoom(this.zoomRoomId);
        throw new Error(`Availability issue on this time range for this room ${this.zoomRoomId}. The next availability for this room is: ${nextAvailability}`);
      }
})


const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
