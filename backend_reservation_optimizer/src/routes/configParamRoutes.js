const express = require('express');
const router = express.Router();
const authMiddleware = require('./middleware/authMiddleware');
const ConfigParam = require('../models/ConfigParam');

router.post('/', authMiddleware, async (req, res) => {
  try {
    const configParam = new ConfigParam(req.body);
    await configParam.save();
    res.status(201).json(configParam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const query = {}
        if (Object.keys(req.query).length){
            Object.assign(query, req.query) 
        }

    const configParams =  await ConfigParam.find(query).lean().exec();
    res.status(201).json({configParams});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const configParam = await ConfigParam.findById(req.params.id);
    if (!configParam) {
      return res.status(404).json({ message: 'ConfigParam not found' });
    }
    res.json(configParam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { key, value } = req.body;
    const configParam = await ConfigParam.findByIdAndUpdate(
      req.params.id,
      { key, value },
      { new: true }
    );
    if (!configParam) {
      return res.status(404).json({ message: 'ConfigParam not found' });
    }
    res.json(configParam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const configParam = await ConfigParam.findByIdAndRemove(req.params.id);
    if (!configParam) {
      return res.status(404).json({ message: 'ConfigParam not found' });
    }
    res.json({ message: 'ConfigParam deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
