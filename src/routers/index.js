const express = require('express');
const { message } = require('statuses');

const router = express.Router();


router.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Welcome!!!'
    })
});

module.exports = router;