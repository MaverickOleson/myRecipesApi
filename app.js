const express = require('express');
const app = express();
require('dotenv').config();

const recipes = {
	cookie: { ingredients: 'whaat' },
	cake: { ingredients: 'whaat' }
}

app.get('/', (req, res) => {
	res.json(recipes);
})

app.listen(process.env.PORT || 5000);