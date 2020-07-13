import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Astronomy from "./components/Astronomy.jsx";
import Nasa from "./components/Nasa.jsx";
import Axios from "axios";

class App extends Component {
  state = {
    info: [],
  };
  async componentDidMount() {
    await Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=XVeDUBKqaiNuZWjcXXngHb5cJuck7W8AH9JiO5kL"
    ).then((response) => {
      console.log(response.data);
      this.setState({ info: response.data });
    });
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/astronomy"
            render={(props) => <Astronomy {...props} info={this.state.info} />}
          />
          <Route exact path="/nasa" render={(props) => <Nasa {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
