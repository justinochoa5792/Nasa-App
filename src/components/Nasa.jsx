import React, { Component } from "react";
import Axios from "axios";

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
        <ul>
          <li> Earth Date: {eachImage.earth_date} </li>
          <li>Rover Launch Date: {eachImage.rover.launch_date}</li>
          <li>
            <img src={eachImage.img_src} />
          </li>
        </ul>
      );
    });
  };

  render() {
    return (
      <div className="nasa">
        Mars Rover Photos
        {this.showImages()}
      </div>
    );
  }
}

export default Nasa;
