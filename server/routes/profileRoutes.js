const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Create profile
router.post('/', async (req, res) => {
  const { bio, skills } = req.body;
  const profile = new Profile({ user: req.user._id, bio, skills });
  const savedProfile = await profile.save();
  res.json(savedProfile);
});

// Get profile
router.get('/me', async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id });
  res.json(profile);
});

// Update profile
router.put('/me', async (req, res) => {
  const updatedProfile = await Profile.findOneAndUpdate({ user: req.user._id }, req.body, { new: true });
  res.json(updatedProfile);
});

module.exports = router;