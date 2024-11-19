const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create project
router.post('/', async (req, res) => {
  const { title, description, team } = req.body;
  const project = new Project({ title, description, team });
  const savedProject = await project.save();
  res.json(savedProject);
});

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Get project by ID
router.get('/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
});

// Update project
router.put('/:id', async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProject);
});

// Delete project
router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
});

module.exports = router;