const express = require('express');
const Meeting = require('../models/Meeting');
const authMiddleware = require('./middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    try {
        const newMeeting = new Meeting({
            title: req.body.title,
            description: req.body.description,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            zoomRoomId: req.body.zoomRoomId,
            organizerUserId: req.body.organizerUserId,
            participants: req.body.participants
        });
        await newMeeting.save();
        res.status(201).json(newMeeting);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const meetings = await Meeting.find();
        res.json(meetings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const updatedMeeting = await Meeting.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                zoomRoomId: req.body.zoomRoomId,
                organizerUserId: req.body.organizerUserId,
                participants: req.body.participants
            },
            { new: true }
        );
        if (!updatedMeeting) {
            return res.status(404).json({ message: 'Meeting not found' });
        }
        res.json(updatedMeeting);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const deletedMeeting = await Meeting.findByIdAndDelete(req.params.id);
        if (!deletedMeeting) {
            return res.status(404).json({ message: 'Meeting not found' });
        }
        res.json({ message: 'Meeting deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
