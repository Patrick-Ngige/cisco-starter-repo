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

export default wrap;
