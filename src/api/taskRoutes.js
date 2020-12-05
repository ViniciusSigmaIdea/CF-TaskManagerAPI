const express = require('express');
const controller = require('../controller/taskController');
const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.find);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
