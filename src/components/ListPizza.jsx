import React from "react";
import MealCard from "./MealCard";

const italianPizzas = [
  "Margherita",
  "Quattro Stagioni",
  "Capricciosa",
  "Diavola",
  "Delicious Meal",
];
function ListPizza() {
  // This component displays a list of Italian pizzas
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">EXPRESS DISH</h1>
      <div className="bg-green-200">
        <ul>
          {italianPizzas.map((pizza, index) => (
            <li key={index}>{pizza}</li>
          ))}
        </ul>
      </div>
      <br />
      <p>Here is an example of a delicious meal:</p>
      <MealCard />
    </div>
  );
}

export default ListPizza;
