import React, { useState } from "react";
import Section1 from "../recipeComponents/section1";
import Section2 from "../recipeComponents/section2";

export default function Recipes() {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <div>
      <Section1 updateRecipes={setRecipeList} />
      <div className="recipes-container">
        {recipeList.length > 0 ? (
          recipeList.map((recipe, index) => (
            <Section2 key={index} recipes={[recipe]} />
          ))
        ) : (
          <div className="no-recipes">
            No recipes found. Try to search for something you wishes.
          </div>
        )}
      </div>
    </div>
  );
}
