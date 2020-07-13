import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Nasa App</h1>
        <Link to="/astronomy">
          <button>Pic of the Day</button>
        </Link>
        <Link to="/nasa">
          <button>Nasa Images</button>
        </Link>
      </div>
    );
  }
}

export default Home;
