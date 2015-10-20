var IngredientInput = React.createClass({
	propTypes: {
		ingredient: React.PropTypes.object.isRequired,
		handleIngredientEdit: React.PropTypes.func.isRequired,
	},

	handleEdit(x, event) {
		this.props.ingredient.set(x, event.target.value);
		this.props.handleIngredientEdit(this.props.ingredient);
	},

	render() {
		return(
			<div className='ingredient-input'>
				<input 
					className='name'
					type="text" 
					placeholder="ingredient" 
					value={this.props.ingredient.get('name')}
					onChange={this.handleEdit.bind(this, 'name')}
				/>
				<input 
					className='unit'
					type="text" 
					placeholder="unit" 
					value={this.props.ingredient.get('unit')}
					onChange={this.handleEdit.bind(this, 'unit')}
				/>
				<input 
					className='qty'
					type="number" 
					placeholder="qty" 
					value={this.props.ingredient.get('qty')}
					onChange={this.handleEdit.bind(this, 'qty')}
				/>
			</div>
		)
	}
})

export default IngredientInput;