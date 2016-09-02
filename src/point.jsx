var React = require('react');

module.exports = React.createClass({
	handleClick: function() {
		this.props.whenPointClicked(this.props.point)
	},
	render: function() {
		var left = 360.5 + (this.props.point.x * 40.05);
      	var top = 280 - (this.props.point.y * 40);
      	style = {
      		left: left,
      		top: top
      	};
		return <div className="point visible" style={style} onClick={this.handleClick}>
			<img className="marker" src="./images/wine-glass.png" />
			<h3 className="point-name">{this.props.point.name}</h3>
			<img className="marker stain" src={"./images/marker-" + this.props.series.seriesName + ".png"} />
			<div className="tooltip-container">
				<div className="point-tooltip" style={{borderColor: this.props.point.color}}>
					<div className="text">
						<h3>{this.props.point.name}</h3>
						<p className="teaser">{this.props.point.traits}</p>
						<p className="learn-more">Learn More</p>
					</div>
				</div>
			</div>
		</div>
	}
})