const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const recipes = {
	chocolate: {
		ingredients: ['1/4 cup cacao or cocoa powder', '3 tbsp coconut oil', '3 tbsp pure maple syrup or honey'],
		instructions: ['Warm the oil if it is not melted', 'Combine all ingredients into a bowl and stir until thickened', 'Pour into mold/container', 'Freeze until solid'],
		types: ['glutenFree', 'cold']
	},
	sFchocolate: {
		ingredients: ['1/4 cup cacao or cocoa powder', '1/4 cup coconut oil', 'vanilla stevia drops'],
		instructions: ['Warm the oil if it is not melted', 'Combine all ingredients into a bowl until they are smooth', 'If mix is too thick, add 1 more tbsp of coconut oil', 'Pour into mold/container', 'Freeze until solid'],
		types: ['sugarFree', 'glutenFree', 'cold']
	},
	cake: {
		ingredients: ['whaat', 'well'],
		types: ['neutral']
	},
	sFcookie: {
		ingredients: ['2 and 1/4 cups flour', '1 teaspoon baking soda', '1 cup and 1 tbsp butter', '1 cup granular white sugar alternative', '1/2 cup brown sugar alternative', '2 eggs', '1 tsp vanilla extract', '1 cup sugar free chocolate chips'],
		instructions: ['Preheat oven to 350F', 'In a medium size mixing bowl, whisk together the flour and baking soda and set bowl aside', 'In a large mixing bowl, cream the butter and sugar alternatives', 'Add dry ingredients from the first bowl to the second bowl and mix gently one half at a time, add eggs, add vanilla extract, add chocolate chips, and mix until blended', 'Take your cookie mix and make individual cookies out of it in a baking pan and bake for 10-12 minutes, or longer depending on if your cookies are large'],
		types: ['sugarFree', 'neutral', 'hot']
	},
	cookie: {
		ingredients: ['2 and 1/4 cups flour', '1 teaspoon baking soda', '1/2 teaspoon salt', '1 cup softened butter', '3/4 cup granulated sugar', '3/4 cup brown sugar', '1 egg', '1 teaspoon vanilla', '2 cups of chocolate chips'],
		instructions: ['Heat oven to 375F', 'In a small bowl, mix flour, baking soda, and salt', 'Beat softened butter and sugars in a large bowl', 'Beat in egg and vanilla until smooth', 'Stir in flour mixture until blended', 'Stir in chocolate chips', 'On ungreased cooking sheets, drop dough by rounded tablespoons 2 inches apart', 'Bake 8-10 minutes until light brown', 'Cool for 30 minutes'],
		types: ['neutral', 'hot']
	},
	gingerbread: {
		ingredients: ['2 and 1/4 cups flour', ''],
		types: ['glutenFree', 'neutral']
	},
	rootBeer: {
		ingredients: ['whaat', 'well'],
		types: ['glutenFree', 'cold']
	}
}

app.get('/', (req, res) => {
	res.json(recipes);
})

app.get('/:name', (req, res) => {
	res.json(recipes[req.params.name]);
})

app.listen(process.env.PORT || 5000);