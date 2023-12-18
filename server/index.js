require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const ctrl = require('./controller');
const { default: axios } = require('axios');
const PORT = process.env.SERVER_PORT || 3001;
const { WATCH_BASE_API_KEY: key } = process.env;

const URL = 'https://api.watchbase.com/v1/';

app.use(express.json());
app.use(cors());

app.get('/api/all', async (req, res) => {
  try {
    const url = `${URL}brands?format=json&key=${key}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.post(`/api/brand`, async (req, res) => {
  try {
    const id = req?.body?.[0]?.id;
    const url = `${URL}families?brand-id=${id}&format=json&key=${key}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const url = `${URL}watch?id=17289&format=json&key=${key}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.post('/api/watches', async (req, res) => {
  try {
    const id = req?.body?.[0]?.id;
    console.log(id);
    const url = `${URL}watches?brand-id=150&format=json&key=${key}`;
    const response = await axios.post(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
