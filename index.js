const express = require('express');
const cors = require('cors');
require('dotenv').config();

const unsplashRoute = require('./routes/unsplash.route');

const PORT = process.env.PORT || 80;

const app = express();
app.use(cors({origin: true}));

app.use('/unsplash', unsplashRoute);

app.listen(PORT, () => console.log(`running on ${PORT}`));
