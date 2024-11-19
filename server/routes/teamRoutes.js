const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Create team
router.post('/', async (req, res) => {
  const { name, members } = req.body;
  const team = new Team({ name, members });
  const savedTeam = await team.save();
  res.json(savedTeam);
});

// Get all teams
router.get('/', async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
});

// Get team by ID
router.get('/:id', async (req, res) => {
  const team = await Team.findById(req.params.id);
  res.json(team);
});

// Update team
router.put('/:id', async (req, res) => {
  const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTeam);
});

// Delete team
router.delete('/:id', async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.json({ message: 'Team deleted' });
});

module.exports = router;