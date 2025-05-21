import React from "react";

function MealCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2021/12/Aubergine-and-sesame-dan-dan-style-noodles-36ab6a2.jpg"
        alt="Meal"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Delicious Meal</div>
        <p className="text-gray-700 text-base">
          A brief description of the meal goes here. It’s tasty, healthy, and
          perfect for any occasion.
        </p>
      </div>
    </div>
  );
}

export default MealCard;
