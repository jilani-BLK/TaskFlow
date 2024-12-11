const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Test de connexion
app.get('/', (req, res) => {
    res.send('Le serveur Node.js fonctionne correctement.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});