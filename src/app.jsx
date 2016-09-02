var React = require('react'),
    ReactDOM = require('react-dom'),
    Chart = require('./chart'),
    Overlay = require('./overlay'),
    data = require('./data');

var axis = ['bold', 'earthy', 'light', 'fruity'];

var App = React.createClass({
  getInitialState: function() {
      return {
          overlayOpen: false
      };
  },
  pointClick: function(point) {
    this.setState({overlayOpen: !this.state.overlayOpen, point: point})
  },
  backgroundClick: function(e) {
    var specs = document.getElementById('specs-container');
    if (e.target != specs) {
      this.setState({overlayOpen: !this.state.overlayOpen})
    }
  },
  render: function() {
    return <div>
        <Chart data={data} axis={axis} whenPointClicked={this.pointClick} />
        <Overlay className={this.state.overlayOpen ? "show" : "hide"} point={this.state.point} whenBackgroundClicked={this.backgroundClick} />
      </div>
  }
});

// Create and render element
element = React.createElement(App, data);
ReactDOM.render(element, document.getElementById('container'));
