var React = require('react');
var Point = require('./point');

module.exports = React.createClass({
	//Create the series container that the points will be bound in.
	render: function() {
        return <div className="series-container">
                    {this.props.series.data.map(function(point,  i) {
            			return <Point series={this.props.series} point={point} key={i} whenPointClicked={this.props.whenPointClicked} />
        			}.bind(this))}
            </div>
	}
})