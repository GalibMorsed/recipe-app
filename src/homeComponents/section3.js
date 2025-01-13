import React, { useState } from "react";

const allRecipes = {
  Vegetarian: [
    {
      id: 1,
      image: "images/foodsimg/img_2.jpg",
      title: "Rice with mixed vegetables",
    },
    {
      id: 2,
      image: "images/foodsimg/img_3.jpg",
      title: "Scalloped Potatoes with vegies",
    },
    {
      id: 3,
      image: "images/foodsimg/img10.avif",
      title: "Fruit Salad",
    },
    {
      id: 4,
      image: "images/foodsimg/img13.jpg",
      title: "Spaghetti Peperoncino.",
    },
  ],
  "Quick + Easy": [
    {
      id: 1,
      image: "images/foodsimg/img_7.jpg",
      title: "Rosted Chicken with vegies",
    },
    {
      id: 2,
      image: "images/foodsimg/img_8.jpg",
      title: "Egg Salad with rice",
    },
    {
      id: 3,
      image: "images/foodsimg/img_9.jpg",
      title: "Kentucky-style steak",
    },
    {
      id: 4,
      image: "images/foodsimg/img11.avif",
      title: "Simple steak with vegies",
    },
  ],
  "Popular on Pinterest": [
    {
      id: 1,
      image: "images/foodsimg/img_1.jpg",
      title: "Mushroom with pepperoni pizza",
    },
    {
      id: 2,
      image: "images/foodsimg/img_4.jpg",
      title: "Spaghetti and Meatballs",
    },
    {
      id: 3,
      image: "images/foodsimg/img_5.jpg",
      title: "Hamburger with vegies",
    },
    {
      id: 4,
      image: "images/foodsimg/img_6.jpg",
      title: "Indian spicy chicken biryani",
    },
  ],
};

const RecipeGrid = () => {
  const [activeTab, setActiveTab] = useState("Vegetarian");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="section3">
      <h1 className="title">Categories</h1>
      <div className="tabs">
        {Object.keys(allRecipes).map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="recipe-grid">
        {allRecipes[activeTab].map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
            <h3 className="recipe-title">{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
