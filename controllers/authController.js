// Import the User model
const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller functions
module.exports = {
    registerUser: async (req, res) => {
        const user = new User(req.body);
        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
   
    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user || !user.isValidPassword(password)) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            // Generate JWT token
            const token = user.generateAuthToken();
            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

 
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !user.isValidPassword(password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Generate JWT token
        const token = jwt.sign({ _id: user._id }, 'your_secret_key');
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

