const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'This is the backend' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
