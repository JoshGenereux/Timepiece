require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const ctrl = require('./controller');
const { default: axios } = require('axios');
const PORT = process.env.SERVER_PORT || 3001;

const key = 'B4PMCSMEXeGo1c0Lpk5HmEQw2bKhSqaIwzhuJ9cy';

app.use(express.json());
app.use(cors());

app.get('/api/search', async (req, res) => {
  try {
    const url = `https://api.watchbase.com/v1/watch?id=17289&format=json&key=${key}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
