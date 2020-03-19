import React from "react";
import AnimalsData from "./AnimalsData";

class MainCard extends React.Component {
  render() {
    return (
      <div className="card card-grid">
        <div className="card-image">
          <img
            className="card-img"
            src={require("../images/bird.png")}
            alt={this.props.animal.name}
          />
        </div>
        <div className="card-info">
          <h3>{this.props.animal.name}</h3>
          <p>{this.props.animal.description}</p>
        </div>
      </div>
    );
  }
}

export default MainCard;
