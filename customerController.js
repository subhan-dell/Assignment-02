const Customer = require('../models/Customer');

exports.index = async (req, res) => {
  const customers = await Customer.find();
  res.render('customers/index', { customers });
};

exports.new = (req, res) => {
  res.render('customers/new');
};

exports.create = async (req, res) => {
  await Customer.create(req.body);
  res.redirect('/customers');
};

exports.show = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.render('customers/show', { customer });
};

exports.edit = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.render('customers/edit', { customer });
};

exports.update = async (req, res) => {
  await Customer.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/customers');
};

exports.delete = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.redirect('/customers');
};