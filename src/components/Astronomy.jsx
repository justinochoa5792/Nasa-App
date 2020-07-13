import React, { Component } from "react";
import { Link } from "react-router-dom";

class Astronomy extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <ul>
          <li>{this.props.info.url} </li>
          <li> {this.props.info.title}</li>
          <li>{this.props.info.copyright}</li>
          <li>{this.props.info.date}</li>
        </ul>
      </div>
    );
  }
}

export default Astronomy;
