import React from "react";

function MealCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="flex space-x-4 px-4 py-2">
        <img
          className="w-2/2 h-auto rounded"
          src="https://images.immediate.co.uk/production/volatile/sites/30/2021/12/Aubergine-and-sesame-dan-dan-style-noodles-36ab6a2.jpg"
          alt="Meal 1"
        />
      </div>
      <div className="px-6 py-4">
        <div className="bg-green-200 font-bold text-xl mb-2">
          Delicious Meal
        </div>
        <p className="text-gray-900 text-base">
          A brief description of the meal goes here. It’s tasty, healthy, and
          perfect for any occasion.
        </p>
      </div>
    </div>
  );
}

export default MealCard;
