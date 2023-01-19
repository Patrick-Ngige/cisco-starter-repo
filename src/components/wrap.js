import React, { Component } from "react";
import "./wrap.css";

class wrap extends Component {
  render() {
    return (
      <div className="wrap">
        <h2 className="wrapHeading">{this.props.name}</h2>
        <div className="wrapContent">{this.props.children}</div>
      </div>
    );
  }
}
// function wrap() {
//   return (
//     <div className='w-100 h-60 bg-green-50 text-center text-[60px]'>wrap</div>
//   )
// }

export default wrap;
