// controllers/authController.js

const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');

// Handle the Google Sign-In request
router.post('/api/auth/google', async (req, res) => {
  try {
    const { authorizationCode } = req.body;

    // Verify the authorization code and exchange it for user information
    const client = new OAuth2Client("53740620878-u4ej58ai4a48tt4u0htuc736fbnodbvr.apps.googleusercontent.com");
    const ticket = await client.verifyIdToken({
      idToken: authorizationCode,
      audience: "53740620878-u4ej58ai4a48tt4u0htuc736fbnodbvr.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    const { email, firstName, img } = payload;

    // Check if the user already exists in the database
    let user = await User.findOne({ email });

    if (!user) {
      // If the user doesn't exist, create a new user record
      user = new User({ firstName, email, img });
      await user.save();
    }

    // Return a response
    res.status(200).json({ success: true, message: 'Google Sign-In successful', user });
  } catch (error) {
    console.error('Google Sign-In error:', error);
    res.status(500).json({ success: false, message: 'An error occurred during Google Sign-In' });
  }
});

module.exports = router;
