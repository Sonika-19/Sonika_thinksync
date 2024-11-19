const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bio: String,
  experience: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Profile', profileSchema);