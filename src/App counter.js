import React from 'react';
//import PropTypes from 'prop-types'

class App extends React.Component {
	state = {
		count: 0
	}
	constructor(props) {
		super(props);
		console.log("hello");
	}
	init = () => {
		this.setState({count: 0});
	};
	add = () => {
		//console.log("add");
		this.setState(current => ({count: current.count + 1}));
	};
	minus = () => {
		//console.log("minus");
		this.setState(current => ({count: current.count - 1}));
	};
	componentDidMount() {
		console.log("componentDidMount");
	}
	componentDidUpdate() {
		console.log("componentDidUpdate");
	}
	componentWillUnmount() {
		//console.log("componentWillUnmount");
		alert("Good Bye");
	}
	render() {
		console.log("render");
		return (
			<div>
				<h1>The number is: {this.state.count}</h1>
				<button onClick={this.init}>Init</button>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		)
	}
}

export default App;
