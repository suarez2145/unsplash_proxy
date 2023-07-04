const express = require('express');
const axios = require('axios');

const router = express.Router();


const apiKey =  process.env.UNSPLASH_KEY;

router.get('/:location/:destination', async (req, res, next) => {
    try {
        const userData = {
            location : req.params.location,
            destination : req.params.destination
        }
        const { data } = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${userData.destination}-${userData.location}`);
        res.json({
            data
        })
    } catch (error) {
        next(error);
    }
});

module.exports = router;