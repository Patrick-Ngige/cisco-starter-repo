import React, { Component } from 'react';
import './banner.css';

// import volunteer from '../../images/volunteer.png';

class MainBanner extends Component {
  render () {
    return (
      <div className='MainBanner'>
        <h1 >{this.props.MainBannerText}</h1>
      </div>
    );
  }
}

// class 
// function   MainBanner() {
//   return (
//       <div className='container w-100 bg-gray-200  text-gray-800  transition ease-in-out text-center'>
//           <p className="text-[70px] font-sans-[100px] py-2">Sextant</p>
//           <img src={volunteer} alt='Main banner'className='w-[100%] h-[400px] '/>
//     </div>
//   );
// };

export default MainBanner