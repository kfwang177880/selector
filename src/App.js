import React, {Component} from 'react';
import Shape from './Shape';

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: 'square',
      circle: 0,
      triangle: 0,
    };
  };
  
  selectShape = shape => {
    this.setState({
      selectedShape: shape,
      [shape]: this.state[shape]+1
    })
  }

  render () {
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: 
            <div>{this.state.selectedShape}</div>
          </div>
          <shpe id='to-shape' shape={this.state.selectedShape} />
        </div>
        <div className="shape-List">
          <Shape shape="square" selectShape={this.selectShape} />
          <Shape shape="circle" selectShape={this.selectShape} />
          <Shape shape="triangle" selectShape={this.selectShape} />
        </div>
        <div className='footer'>
          Triangle clicks:
          <div>{this.state.triangle}</div>
          Square clicks:
          <div>{this.state.square}</div>
          Circle clicks:
          <div>{this.state.circle}</div>
        </div>
      </div>
    )
  }
}

export default Selector