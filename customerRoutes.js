const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.index);
router.get('/new', customerController.new);
router.post('/', customerController.create);
router.get('/:id', customerController.show);
router.get('/:id/edit', customerController.edit);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);

module.exports = router;