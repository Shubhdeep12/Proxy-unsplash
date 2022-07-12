const express = require('express');
const axios = require("axios").create({baseURL: 'https://api.unsplash.com/'})
const router = express.Router();

router.get('/', async (req, res) => {
    const query = req.query.query || null;
    const page = req.query.page || null;
    let unsplashResponse = null;

    try {
      unsplashResponse = await axios.get(`search/photos/?query=${query}&page=${page}&limit=10&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    } catch (error) {
      res.status(error.response.status).send(error.response.data);
      }
      console.log(unsplashResponse)
    res.status(unsplashResponse.status).send(unsplashResponse.data);
});

module.exports = router;