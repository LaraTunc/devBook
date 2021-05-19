const router = require('express').Router();

// @route POST api/post
// @desc  Test route
// @access Public
router.get('/', (req, res) => res.send('post route'));

module.exports = router;
