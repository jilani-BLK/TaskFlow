const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
    res.send('Le serveur fonctionne correctement.');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Le serveur est opérationnel sur le port ${PORT}`);
});