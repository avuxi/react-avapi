import React, { Component } from 'react';

class AvuxiMap extends Component {
  componentDidMount() {
    const options = {
      zoom: parseInt(this.props.zoom),
      center: new google.maps.LatLng(this.props.lat, this.props.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    const map = new google.maps.Map(this.refs.container, options);
    AVUXI.MapStart(map, this.props.confId);
  }
  
  render() {
    return (
      <div className='vxmap' ref='container'></div>
    );
  }
}

export default AvuxiMap