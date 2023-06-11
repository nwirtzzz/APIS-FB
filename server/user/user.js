const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

exports.register = async (req, res) => {
    const { username, password } = req.body;
  
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(409).json({ message: 'Username already taken' });
      return;
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
  
    res.json({ message: 'Registration successful' });
}

exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        res.status(401).json({ message: 'Invalid password' });
        return;
    }

    res.json({ message: 'Login successful' });    
}

// Views

// Render register view
exports.renderRegister = (req, res) => {
    res.render('register/register');
  };

// Render login view
exports.renderLogin = (req, res) => {
    res.render('login/login');
  };
  