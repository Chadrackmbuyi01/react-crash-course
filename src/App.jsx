import "./App.css";
import React from "react";
import MealCard from "./components/MealCard";
import ListPizza from "./components/ListPizza";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ListPizza />
    </div>
  );
}

export default App;
