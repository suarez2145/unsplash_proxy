const express = require('express');

const emojis = require('./emojis');

const unsplashRequest = require('./unsplashRequest');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/unsplash-request', unsplashRequest );

module.exports = router;
