const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const recipes = {
	Chocolate: {
		ingredients: ['1/4 cup cacao or cocoa powder', '3 tbsp coconut oil', '3 tbsp pure maple syrup or honey'],
		instructions: ['Warm the oil if it is not melted', 'Combine all ingredients into a bowl and stir until thickened', 'Pour into mold/container', 'Freeze until solid'],
		types: ['glutenFree', 'cold']
	},
	'Sugar Free Chocolate': {
		ingredients: ['1/4 cup cacao or cocoa powder', '1/4 cup coconut oil', 'vanilla stevia drops'],
		instructions: ['Warm the oil if it is not melted', 'Combine all ingredients into a bowl until they are smooth', 'If mix is too thick, add 1 more tbsp of coconut oil', 'Pour into mold/container', 'Freeze until solid'],
		types: ['sugarFree', 'glutenFree', 'cold']
	},
	'Sugar Free Chocolate Chip Cookies': {
		ingredients: ['2 and 1/4 cups flour', '1 teaspoon baking soda', '1 cup and 1 tbsp butter', '1 cup granular white sugar alternative', '1/2 cup brown sugar alternative', '2 eggs', '1 tsp vanilla extract', '1 cup sugar free chocolate chips'],
		instructions: ['Preheat oven to 350F', 'In a medium size mixing bowl, whisk together the flour and baking soda and set bowl aside', 'In a large mixing bowl, cream the butter and sugar alternatives', 'Add dry ingredients from the first bowl to the second bowl and mix gently one half at a time, add eggs, add vanilla extract, add chocolate chips, and mix until blended', 'Take your cookie mix and make individual cookies out of it in a baking pan and bake for 10-12 minutes, or longer depending on if your cookies are large'],
		types: ['sugarFree', 'neutral', 'hot']
	},
	'Chocolate Chip Cookies': {
		ingredients: ['2 and 1/4 cups flour', '1 teaspoon baking soda', '1/2 teaspoon salt', '1 cup softened butter', '3/4 cup granulated sugar', '3/4 cup brown sugar', '1 egg', '1 teaspoon vanilla', '2 cups of chocolate chips'],
		instructions: ['Heat oven to 375F', 'In a small bowl, mix flour, baking soda, and salt', 'Beat softened butter and sugars in a large bowl', 'Beat in egg and vanilla until smooth', 'Stir in flour mixture until blended', 'Stir in chocolate chips', 'On ungreased cooking sheets, drop dough by rounded tablespoons 2 inches apart', 'Bake 8-10 minutes until light brown', 'Cool for 30 minutes'],
		types: ['neutral', 'hot']
	},
	Gingerbread: {
		ingredients: ['1 and 1/2 cups flour', '3/4 teaspoon xanthan gum', '1/2 teaspoon baking soda', '1 and 1/2 teaspoons ground cinnamon', '1 teaspoon ground ginger', '1/4 teaspoon kosher salt', '1/2 cup packed light brown sugar', '6 tablespoons unsalted butter', '4 tablespoons unsulphured molasses', '1 tablespoon honey', '1 egg', '1/2 teaspoon pure vanilla extract'],
		instructions: ['Preheat oven to 350F', 'In a large bowl, place flour, xanthan gum, baking soda, cinnamon, ginger, and salt and whisk till well mixed.', 'Add the brown sugar and whisk again till mixed and with no lumps', 'Add butter, molasses, honey, egg, and vanilla and mix well.', 'Transfer dough to a large baking sheet with unbleached parchment paper and cover with another sheet of parchment and roll into a rectangle about 3/8-inch thick', 'Remove parchment and cut out gingerbread in any shape with flour or cornstarch', 'Place the dough on a flat container, and place in the freezer for about 10 minutes', 'Repeat process of rolling out, cutting, and freezing the remaining dough', 'Place the cuts on the baking sheets', 'Bake dough for about 8 minutes'],
		types: ['glutenFree', 'neutral']
	},
	'Root Beer': {
		ingredient: ['4 quarts cold water', '2-3 cups granulated sugar, depending on desired sweetness', '3 tablespoons root beer extract', '1-2 pounds food-grade dry ice broken into pieces'],
		instructions: ['In a large pitcher, stir together the water, sugar, and root beer extract until the sugar is dissolved, and test test for more extract or sugar', 'In a well ventilated, carefully add the dry ice to the pitcher using insulated gloves or tongs, and stir with a long spoon', 'Continue stirring until dry ice is melted'],
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