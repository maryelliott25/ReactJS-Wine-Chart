var React = require('react');
var Series = require('./series');

module.exports = React.createClass({
    //Create the div which the chart will be rendered to.
    render: function () {
        return <div className="grid-container">
                <img className="chart-grid" src="./images/chart-grid.png" />
                <img className="chart-axis" src="./images/chart-axis.png" />
                {this.props.data.map(function(series, i) {
                    return <Series series={series} key={i} whenPointClicked={this.props.whenPointClicked} />
                }.bind(this))}
                {this.props.axis.map(function(axis, i){
                    return <div className={axis + ' ribbon'} key={i}>
                            <strong className="ribbon-content">
                                <h2>{axis}</h2>
                            </strong>
                        </div>
                })}
            </div>
    }
});