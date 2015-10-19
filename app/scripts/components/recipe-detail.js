import Ingredient from 'components/ingredient'

var RecipeDetail = React.createClass({
	propTypes: {
		details: React.PropTypes.object.isRequired,
	},

	render() {
 			return (
			<div
				className='recipe-detail'
			>
				<h1>{this.props.details.name}</h1>
				<ul>
					{
						this.props.details.ingredients.map((i, index) => <Ingredient {...i} key={index} />)
					}
				</ul>
			</div>
		)
	}
});

export default RecipeDetail