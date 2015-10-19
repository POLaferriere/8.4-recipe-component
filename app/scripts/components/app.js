import RecipeList from 'components/recipe-list';
import RecipeForm from 'components/recipe-form';
import RecipeDetail from 'components/recipe-detail';

var App = React.createClass({
	propTypes: {
		recipes: React.PropTypes.array.isRequired,
		newRecipe: React.PropTypes.object.isRequired,
		ingredients: React.PropTypes.object.isRequired,
		route: React.PropTypes.string.isRequired,
		onSubmit: React.PropTypes.func.isRequired,
		onNameEdit: React.PropTypes.func.isRequired,
		onIngredientEdit: React.PropTypes.func.isRequired,
		onAddIngredient: React.PropTypes.func.isRequired,
		clickName: React.PropTypes.func.isRequired,
		recipeDetail: React.PropTypes.object.isRequired,
	},

	render() {
		switch(this.props.route){
			case 'index' :
				return (
					<div>
						<RecipeList
							recipes={this.props.recipes}
							clickName={this.props.clickName}
						/>
						<RecipeForm 
							onSubmit={this.props.onSubmit} 
							onAddIngredient={this.props.onAddIngredient}
							newRecipe={this.props.newRecipe}
							ingredients={this.props.ingredients}
							onIngredientEdit={this.props.onIngredientEdit}
							onNameEdit={this.props.onNameEdit}>
						</RecipeForm>
					</div>
				);
				break;
			case 'recipe' :
				return (
					<div>
						<RecipeList
							recipes={this.props.recipes}
							clickName={this.props.clickName}
						/>
						<RecipeDetail
							details={this.props.recipeDetail}>
						</RecipeDetail>
						<RecipeForm 
							onSubmit={this.props.onSubmit} 
							onAddIngredient={this.props.onAddIngredient}
							newRecipe={this.props.newRecipe}
							ingredients={this.props.ingredients}
							onIngredientEdit={this.props.onIngredientEdit}
							onNameEdit={this.props.onNameEdit}>
						</RecipeForm>
					</div>
				);
				break;
		}
	}
})

export default App;