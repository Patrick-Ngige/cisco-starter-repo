import React, { Component } from 'react';
import './App.css';
import MainBanner from "./components/banners/MainBanner";
import Wrap from "./components/wrap";
import AddressDisplay from './AddressDisplay';


class App extends Component {
  render() {
    return (
      <div className='App'>
          <MainBanner MainBannerText='Sextant' />
          <Wrap name="Public IPv4 Address">
            <AddressDisplay url='https://api.ipify.org?format=json' />
          </Wrap>
          <Wrap name="Public IPv6 Address">
          <AddressDisplay url='https://api64.ipify.org?format=json' />
          </Wrap> 
      
      </div>
    );
  }
}



export default App;
