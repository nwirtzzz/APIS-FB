const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://skyfran:Apis2023@futbol.cxt0fvs.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
