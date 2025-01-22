const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// Define the route for password generation
router.get('/', (req, res) => {
    res.render('index', { result: null });
});

router.post('/generate', passwordController.generateAndSavePassword);

// Export the router
module.exports = router;