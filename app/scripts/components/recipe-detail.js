import Ingredient from 'components/ingredient'

var RecipeDetail = React.createClass({
	propTypes: {
		details: React.PropTypes.object.isRequired,
	},

	getInitialState() {
		return {
			details: this.props.details,
			servings: this.props.details.servings,
			system: 'imperial'
		}
	},

	handleServingSubmit(e) {
		e.preventDefault();
		let ratio = this.refs.servings.value/this.state.servings;
		this.state.details.ingredients.map((obj) => {
			for (var key in obj) {
				if(key === 'qty') {
					obj[key] = obj[key]*ratio
				}
			}
		});
		this.setState({
			details: this.state.details,
			servings: this.refs.servings.value
		})
	},

	handleSelectChange(e) {
		this.setState({
			system: e.target.value
		});
	},

	render() {
 			return (
			<form
				className='recipe-detail'
				onSubmit={this.handleServingSubmit}
			>
				<h1>{this.props.details.name}</h1>
				<input type="number" defaultValue={this.state.servings} ref='servings' />
				<select name="" id="" value={this.state.system} onChange={this.handleSelectChange}>
					<option value="metric">Metric</option>
					<option value="imperial">Imperial</option>
				</select>
				<ul>
					{this.state.details.ingredients.map((i, index) => <Ingredient {...i} key={index} />)}
				</ul>
			</form>
		)
	}
});

export default RecipeDetail