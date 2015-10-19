var Ingredient = Backbone.Model.extend({
	defaults: {
		name: '',
		unit: '',
		qty: null,
	}
});

export default Ingredient;