import React, { Component } from 'react';

class AvuxiLse extends Component {
  componentDidMount() {
    AVUXI.LSERefresh();
  }
  
  render() {
    return (
      <div className='vxlse' ref='container'>
        <span className='vxwil'
              t={this.props.confId}
              ll={`${this.props.lat},${this.props.lng}`}>
        </span>
      </div>
    );
  }
}

export default AvuxiLse