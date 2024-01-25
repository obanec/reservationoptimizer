const express = require('express');
const ZoomRoom = require('../models/ZoomRoomAccount');
const authMiddleware = require('./middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    try {
        const newZoomRoom = new ZoomRoom(req.body);
        await newZoomRoom.save();
        res.status(201).json(newZoomRoom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const zoomRooms = await ZoomRoom.find();
        res.json(zoomRooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const updatedZoomRoom = await ZoomRoom.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedZoomRoom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await ZoomRoom.findByIdAndDelete(req.params.id);
        res.json({ message: 'ZoomRoom deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
