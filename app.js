const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const recipes = {
	cookie: { ingredients: ['whaat', 'well'] },
	cake: { ingredients: ['whaat', 'well'] },
	chocolate: { ingredients: ['whaat', 'well'] },
	bubbleGum: { ingredients: ['whaat', 'well'] },
	ginger: { ingredients: ['whaat', 'well'] },
	rootBeer: { ingredients: ['whaat', 'well'] }
}

app.get('/', (req, res) => {
	res.json(recipes);
})

app.get('/:name', (req, res) => {
	res.json(recipes[req.params.name]);
})

app.listen(process.env.PORT || 5000);