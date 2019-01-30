import React, { Component } from "react";

class BeyCard extends Component {

  handler = () => {
    if(this.props.func) {
      this.props.func(this.props.data.id, this.props.data.favorite)
    }
  }

  render() {
    const {name, img} = this.props.data
    return (
      <div>
        <h3>{name}</h3>
        <img onClick={this.handler} alt={name} src={img} />
      </div>
    );
  }
}

export default BeyCard;
