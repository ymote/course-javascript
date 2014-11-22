var recipe = {
    'title': 'Mole',
    ???
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
 };

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');

for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}
