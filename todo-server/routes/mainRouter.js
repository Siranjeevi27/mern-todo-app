const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');


router.route('/').get(mainController.getAllTodo).post(mainController.addnewTodo);
router.route('/delete/:id').get(mainController.dellTodo);

module.exports = router;