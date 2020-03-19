import React from "react";
import MainCard from "./MainCard";
import Animals from "./AnimalsData";

console.log(Animals);
class Main extends React.Component {
  render() {
    const newAnimals = Animals.map(animal => {
      return <MainCard key={animal.id} animal={animal} />;
    });
    return <main className="main">{newAnimals}</main>;
  }
}

export default Main;
