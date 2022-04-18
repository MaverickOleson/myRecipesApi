const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.listen(process.env.PORT);