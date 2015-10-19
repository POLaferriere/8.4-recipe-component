import Recipe from 'models/recipes/recipe';

$.ajaxSetup({
	headers: {
		'X-Parse-Application-ID': 'pBJg8JZ9YQbPSJFOOBKeR2DbHTK5wZedUL0WomUo',
		'X-Parse-REST-API-Key': '4zpIfEBIyQ3OGVXo7zzfHkGH8EfKYW9eLU0cKJQ7'
	}
});

var RecipeCollection = Backbone.Collection.extend({
	url: 'https://api.parse.com/1/classes/Recipe',
	model: Recipe,
	parse(response) {
		return response.results;
	}
});

export default RecipeCollection;