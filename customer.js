const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: { type: String, enum: ['Lead', 'Prospect', 'Customer'], default: 'Lead' },
  notes: String
});

module.exports = mongoose.model('Customer', customerSchema);
