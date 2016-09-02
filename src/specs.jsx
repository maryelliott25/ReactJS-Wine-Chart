var React = require('react');

module.exports = React.createClass({

	render: function() {
		return <div className="specs-wrapper">
				<img className="overlay-close" src="./images/overlay-close.png" />
				<div className="wine-labels" style={{borderColor: this.props.point.color}}>
					<h3 className="overlay-title">Suggested Labels</h3>
					<div className="labels-container">
						<ul>
							{this.props.point.labels.map(function(label){
								return <li>
										<a href={label.link} target="_blank">{label.label}</a>
									</li>
							})}
						</ul>
					</div>
				</div>
				<div className="specs-container" style={{borderColor: this.props.point.color}}>
					<div className="specs-header">
						<h2>{this.props.point.name}</h2>
						<h3 style={{borderColor: this.props.point.color}}>{this.props.point.traits}</h3>
					</div>
					<div className="specs-body">
						<h4>Food Pairings</h4>
						<p className="pairings-title">{this.props.point.foodPairings.summary}</p>
						<ul className="food-pairings">
							{this.props.point.foodPairings.pairings.map(function(pairing){
					        	return <li className="pairings-list-item">{pairing}</li>
					        })}
						</ul>
						<h4 className="regions-title">Growing Regions</h4>
						<ul>
							{this.props.point.regions.map(function(region){
					        	return <li className="regions-list-item">{region}</li>
					        })}
						</ul>
					</div>
				</div>
			</div>
	}
});