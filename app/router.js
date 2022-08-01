const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');

// Peut importe la route, j'appelle le middleware sacAVariable
router.use('/', mainController.sacAVariable);

// All routes
router.get('/', mainController.home);
router.get('/details/:id', mainController.details);

// router.get('/type', mainController.types);
router.get('/type/:type', mainController.type);

module.exports = router;