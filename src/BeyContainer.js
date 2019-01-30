import React from "react";
import BeyCard from "./BeyCard";


class BeyContainer extends React.Component {

  render() {
    const {fav} = this.props
    let bey = this.props.beyImages.map(beyonce => <BeyCard key={beyonce.id} data={beyonce} func={fav ? false : this.props.func}/>)
    let favs = this.props.beyImages.filter(beyonce => beyonce.favorite).map(beyonce => <BeyCard key={beyonce.id} data={beyonce} func={fav ? false : this.props.func}/>)
    return (
      <div className={ fav ? "favorites" : "index"}>
        <h1>{ fav ? "Favorites" : "Index"}</h1>
        {fav? favs : bey}
      </div>
    );
  }
}

export default BeyContainer;
