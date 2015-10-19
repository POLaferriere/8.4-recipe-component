import IngredientInput from 'components/ingredient-input';
import Ingredient from 'models/ingredients/ingredient'

var RecipeForm = React.createClass({
	propTypes: {
		onSubmit: React.PropTypes.func.isRequired,
		onNameEdit: React.PropTypes.func.isRequired,
		onIngredientEdit: React.PropTypes.func.isRequired,
		newRecipe: React.PropTypes.object.isRequired,
		ingredients: React.PropTypes.object.isRequired,
	},

	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	this.props.onSubmit(this.refs.name.value, (_.pairs(this.refs.ingredientInput.state)));
	// 	this.refs.ingredientInput.setState({
	// 		ingredient: '',
	// 		unit: '',
	// 		quantity: '',
	// 	});	
	// },

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.refs.name.value);
		this.refs.name.value = '';
	},

	handleNameEdit(e) {
		this.props.onNameEdit('name', e.target.value);
	},

	handleIngredientEdit(model) {
		this.props.onIngredientEdit(model)
	},

	handleAddIngredient(e) {
		e.preventDefault();
		this.props.onAddIngredient();
	},

	render() {
		// var ingredients = []
		// for(var i = 0; i < this.state.ingredients; i++) {
		// 	ingredients.push(i);
		// }	

		return(
			<form action="" onSubmit={this.handleSubmit} className='recipe-form'>
				<h1>Add a New Recipe</h1>
				<input type="text" placeholder="Recipe Name" className="recipe-name" ref='name' onChange={this.handleNameEdit} />
				{this.props.ingredients.map((model, key) => {
					return (
						<IngredientInput 
								ingredient={model}
								handleIngredientEdit={this.handleIngredientEdit}
								key={key}>
						</IngredientInput>
					)
				})}
				<i className="fa fa-plus-square-o" onClick={this.handleAddIngredient}></i>
				<input type="submit" className='submit'/>
			</form>
		)
	},
})

export default RecipeForm;