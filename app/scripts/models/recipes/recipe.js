$.ajaxSetup({
	headers: {
		'X-Parse-Application-ID': 'pBJg8JZ9YQbPSJFOOBKeR2DbHTK5wZedUL0WomUo',
		'X-Parse-REST-API-Key': '4zpIfEBIyQ3OGVXo7zzfHkGH8EfKYW9eLU0cKJQ7'
	}
});

var Recipe = Backbone.Model.extend({
	urlRoot: 'https://api.parse.com/1/classes/Recipe',

	defaults: {
		name: '',
		ingredients: {
			ingredient: '',
			unit: '',
			quantity: 0,
		},
	},
});

export default Recipe;