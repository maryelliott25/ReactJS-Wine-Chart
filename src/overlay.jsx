var React = require('react');
var ReactDOM = require('react-dom');
var Specs = require('./specs');

module.exports = React.createClass({
	render: function() {
		return null
	},
	componentDidMount: function() {
		this.overlay = document.createElement('div');
		this.overlay.setAttribute('id', 'scatter-plot-overlay');
		this.overlay.setAttribute('class', this.props.className);
		this.overlay.onclick = this.props.whenBackgroundClicked;
		document.body.appendChild(this.overlay);
	},
	componentWillUpdate(newState) {
		ReactDOM.render(<Specs point={newState.point} />, document.getElementById('scatter-plot-overlay'));
		this.overlay.setAttribute('class', newState.className);
	}
});