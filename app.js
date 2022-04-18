const express = require('express');
const app = express();
require('dotenv').config();

const recipes = {
	cookie: { ingredients: 'whaat' },
	cake: { ingredients: 'whaat' }
}

app.get('/', (req, res) => {
	res.send(recipes);
})

app.get('/:name', (req, res) => {
	res.send(recipes[req.params.name]);
})

app.listen(process.env.PORT || 5000);