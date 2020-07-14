import React, { Component } from "react";

class Astronomy extends Component {
  render() {
    return (
      <div>
        <div className="apod">
          <h2 style={{ padding: "10px" }}>Astronomy Picture of the day!</h2>
          <h3>{this.props.info.title}</h3>
          <img
            src={this.props.info.url}
            style={{ height: "75vh", width: "50vw" }}
            alt={this.props.info.url}
          />
          <h4>{this.props.info.copyright}</h4>
          <h4>{this.props.info.date}</h4>
        </div>
      </div>
    );
  }
}

export default Astronomy;
