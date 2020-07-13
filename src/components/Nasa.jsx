import React, { Component } from "react";
import Axios from "axios";

class Nasa extends Component {
  state = {
    images: [],
  };
  async componentDidMount() {
    await Axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XVeDUBKqaiNuZWjcXXngHb5cJuck7W8AH9JiO5kL"
    ).then((res) => {
      console.log(res.data);
      this.setState({ images: res.data.photos });
    });
  }

  render() {
    return <div>HI</div>;
  }
}

export default Nasa;
