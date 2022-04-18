const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const recipes = {
	cookie: { ingredients: 'whaat' },
	cake: { ingredients: 'whaat' }
}

app.get('/', (req, res) => {
	res.json(recipes);
})

app.get('/:name', (req, res) => {
	res.json(recipes[req.params.name]);
})

app.listen(process.env.PORT || 5000);