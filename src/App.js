import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./BeyContainer"
import beyImages from "./beyImages";

class App extends Component {
  state = {
    beyImages
  };

  toggleFavorite = (id, fav) => {
    this.setState({beyImages: [...this.state.beyImages].map(bey => bey.id === id ? {...bey, favorite: !fav} : bey)})
  }

  render() {
    return (
      <div className="container">
        <BeyContainer beyImages={this.state.beyImages} func={this.toggleFavorite}/>
        <BeyContainer beyImages={this.state.beyImages} fav/>
      </div>
    );
  }
}

export default App;
