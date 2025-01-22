const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const passwordRoutes = require('./router/passwordRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes
app.use('/', passwordRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
