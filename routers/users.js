const express = require('express');
const router = express.Router()

const userController = require('../controllers/usersController')

router.post('/bookseats', userController.bookSeats);
router.post('/getallseats', userController.getAllSeats);
router.post('/createAllSeats', userController.createAllSeats);

module.exports = router;

