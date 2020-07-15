import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Nasa App</h1>
        <Link to="/astronomy">
          <button
            style={{
              margin: "10px",
              padding: "5px",
              borderRadius: "10px",
              backgroundColor: "#eff3c6",
              color: "black",
            }}
          >
            Pic of the Day
          </button>
        </Link>
        <Link to="/nasa">
          <button
            style={{
              margin: "10px",
              padding: "5px",
              borderRadius: "10px",
              backgroundColor: "#eff3c6",
              color: "black",
            }}
          >
            Mars Rover Images
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
