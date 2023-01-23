import React, { Component } from 'react';
import './App.css';
import MainBanner from "./components/banners/MainBanner";
import Wrap from "./components/wrap";





class App extends Component {
  render() {

    

    return (
      <div className='App'>
          <MainBanner MainBannerText='Sextant' />
          <Wrap name="This is the first exhibition!"></Wrap>
          <Wrap name="Here is the second exhibition!"></Wrap> 
          <Wrap name="This is the final exhibition!"></Wrap>
      </div>
    );
  }
}



export default App;
