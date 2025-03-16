const User = require('../model/user.model');
const bcrypt = require('bcrypt');

const userSignup = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashpassword });

    try {
        await newUser.save();

        // Exclude the password from the response
        const userResponse = newUser.toObject();
        delete userResponse.password; // Remove the password field

        res.status(201).json({ message: 'User signed up successfully', user: userResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRecord = await User.findOne({ email });

        if (!userRecord) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordMatch = await bcrypt.compare(password, userRecord.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        // Exclude the password from the response
        const userResponse = userRecord.toObject();
        delete userResponse.password; // Remove the password field

        return res.status(200).json({ message: 'User Login Successfully', user: userResponse });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error while Logging' });
    }
};

module.exports = {
    userSignup,
    userLogin
};
