import Recipe from 'models/recipes/recipe'
import RecipeCollection from 'models/recipes/recipe-collection';
import Ingredient from 'models/ingredients/ingredient';
import IngredientCollection from 'models/ingredients/ingredient-collection';
import App from 'components/app';

var AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		':id': 'recipe',
	},

	initialize() {
		this.recipes = new RecipeCollection();
		this.newRecipe = new Recipe();
		this.ingredients = new IngredientCollection();
		var ingredient = new Ingredient();
		this.ingredients.add(ingredient);
		this.recipeDetail = new Recipe();


		this.listenTo(this.newRecipe, 'change', this.renderApp);
		this.listenTo(this.ingredients, 'add remove update change', this.renderApp);
		this.listenTo(this.recipes, 'add remove update change', this.renderApp);
	},

	index() {
		this.currentRoute = 'index'
		this.recipes.fetch().then((recipes) => {
			this.renderApp();
			
		});
	},

	recipe(id) {
		this.currentRoute = 'recipe';
		var recipe = this.recipes.find((model => {
			return model.get('objectId') === id
		}))
		this.recipeDetail = recipe;
		this.renderApp();
	},

	onNameEdit(prop, newProp) {
		this.newRecipe.set(prop, newProp)
		// this.renderApp();
	},

	onIngredientEdit(model) {
		this.ingredients.add(model, {merge:true});
	},

	onAddIngredient() {
		var ingredient = new Ingredient();
		this.ingredients.add(ingredient);
	},

	onSubmit(name) {
		this.recipes.create({
			name: name,
			ingredients: this.ingredients.toJSON(),
		})
		this.ingredients.reset();
		var ingredient = new Ingredient();
		this.ingredients.add(ingredient);
	},

	clickName(id) {
		this.navigate(this.recipes.find((model) => {
			return model.get('name') === id
		}).get('objectId'), {trigger: true})
	},

	renderApp() {
		ReactDOM.render(
			<App
				recipes={this.recipes.toJSON()}
				newRecipe={this.newRecipe.toJSON()}
				recipeDetail={this.recipeDetail.toJSON()}
				ingredients={this.ingredients}
				route={this.currentRoute}

				onSubmit={this.onSubmit.bind(this)}
				onIngredientEdit={this.onIngredientEdit}
				onAddIngredient={this.onAddIngredient}
				onNameEdit={this.onNameEdit.bind(this)}
				clickName={this.clickName.bind(this)}
			/>,
			document.getElementById('container')
		);
	},
})

export default AppRouter;