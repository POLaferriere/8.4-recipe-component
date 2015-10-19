import Ingredient from 'components/ingredient'

var RecipeList = React.createClass({
	propTypes: {
		recipes: React.PropTypes.array.isRequired,
		clickName: React.PropTypes.func.isRequired,
	},

	handleClick(e) {
		this.props.clickName(e.target.textContent);
	},

	render() {
		console.log(this.props.recipes);
		return (
			<ul
				className="recipe-list"  
			>
				{_.map(this.props.recipes, (object) => {
					return (
						<li
						ref="something"
						key={object.objectId}
						onClick={this.handleClick}
						>
							<h1>{object.name}</h1>
						</li>
					)
				})}
			</ul>
		)
	}
});

export default RecipeList

// <ul>
// 				{this.props.recipes.map(function(object){
// 					return 
// 						(<h1 key={object.objectId} onClick={this.handleClick}>{object.name}</h1>)
// 					})}
// 			</ul>