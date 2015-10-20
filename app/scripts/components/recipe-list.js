import Ingredient from 'components/ingredient'

var RecipeList = React.createClass({
	propTypes: {
		recipes: React.PropTypes.array.isRequired,
		clickName: React.PropTypes.func.isRequired,
	},

	getInitialState() {
		return {
			search: ''
		}
	},

	handleClick(e) {
		this.props.clickName(e.target.textContent);
	},

	handleChange(e) {
		this.setState({
			search: e.target.value.trim().toLowerCase()
		});
	},

	handleSearchClick() {
		$('.search-box').toggleClass('active');
	},

	handleExpandClick() {
		$('.recipes').toggleClass('expanded');
		$('.fa-angle-double-down, .fa-angle-double-up').toggleClass('hidden');
	},

	render() {
		var recipes = this.props.recipes;
		console.log(recipes);
		// debugger;

		recipes = recipes.filter((recipe) => {
			return _.any(_.values(recipe), (value) => { 
        return (typeof value == 'string' && value.trim().toLowerCase().indexOf(this.state.search) > -1)
      }) || _.any(recipe.ingredients, (ingredient) => {
      	return ingredient.name.trim().toLowerCase().indexOf(this.state.search) > -1
      })
    });

		return (
			<div className="recipe-list">
				<ul className='recipes'>
					{_.map(recipes, (object) => {
						return (
							<li
							key={object.objectId}
							onClick={this.handleClick}
							>
								<h1>{object.name}</h1>
							</li>
						)
					})}
				</ul>
				<input className='search-box' type="text" onKeyUp={this.handleChange} placeholder='Search recipes or ingredients'/>
				<i className="fa fa-search" onClick={this.handleSearchClick}></i>
				<i className="fa fa-angle-double-down" onClick={this.handleExpandClick}></i>
				<i className="fa fa-angle-double-up hidden" onClick={this.handleExpandClick}></i>
			</div>
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