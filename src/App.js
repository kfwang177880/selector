import React, {Component} from 'react';
import Shape from './Shape';

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: 'square',
    };
  };
  
  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName
    })
  }

  render () {
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: </div>
          <div>{this.state.selectedShape}</div>
        </div> 
        <div className="shape-List">
          <Shape shape="square" selectedShape={this.selectShape} />
          <Shape shape="circle" selectedShape={this.selectShape} />
          <Shape shape="triangle" selectedShape={this.selectShape} />
        </div>
      </div>
    )
  }
}

export default Selector