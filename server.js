const express = require('express');
const path = require('path');

// Keeps the connection string in a different directory
const connectDB = require('./config/db');

// Init app
const app = express();

// Connect to Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
