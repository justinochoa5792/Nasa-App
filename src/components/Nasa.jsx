import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Nasa extends Component {
  state = {
    images: [],
  };
  async componentDidMount() {
    await Axios.get(
      " https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XVeDUBKqaiNuZWjcXXngHb5cJuck7W8AH9JiO5kL"
    ).then((res) => {
      console.log(res.data.photos);
      this.setState({ images: res.data.photos });
    });
  }
  showImages = () => {
    return this.state.images.map((eachImage) => {
      return (
        <ul style={{ listStyle: "none" }}>
          <li> Rover Name : {eachImage.rover.name} </li>
          <li>Rover Launch Date: {eachImage.rover.launch_date}</li>
          <li>
            <img src={eachImage.img_src} alt={eachImage.id} />
          </li>
        </ul>
      );
    });
  };

  render() {
    return (
      <div>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
        <div className="nasa">
          <h2>Mars Rover Photos</h2>
          {this.showImages()}
        </div>
      </div>
    );
  }
}

export default Nasa;
