import React, { Component } from 'react';
import './banner.css';

class MainBanner extends Component {
  render () {
    return (
      <div className='MainBanner'>
        <h1 >{this.props.MainBannerText}</h1>
      </div>
    );
  }
}



export default MainBanner