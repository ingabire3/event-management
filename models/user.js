const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    // Add other user attributes as needed
});

// Hash the user's password before saving
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

// Generate JWT token
userSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, 'your_secret_key');
    return token;
};

// Validate user's password
userSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const isValid = await bcrypt.compare(password, user.password);
    return isValid;
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
