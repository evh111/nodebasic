const express = require('express');
const router = express.Router();

const Image = require('../../models/Image');

// @route   GET api/posts
// @desc    Test endpoint
// @access  Public
router.get('/test', async (req, res) => {
  try {
    res.json({ msg: 'Image endpoints active' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
