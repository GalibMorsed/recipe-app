import React, { useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const APP_ID = "9ef9f4d6";
const APP_KEY = "1518b8ef3c55e22124a0b54a425bc7df";

export default function Section1({ updateRecipes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const timeoutRef = useRef(null);

  const fetchRecipe = async (searchString) => {
    try {
      const response = await axios.get(
        `http://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      updateRecipes(response.data.hits); // Pass data to parent or another component
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const onTextChange = (event) => {
    setSearchTerm(event.target.value);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (event.target.value.trim() !== "") fetchRecipe(event.target.value);
    }, 5000);
  };

  const handleSearchClick = (searchString) => {
    setSearchTerm(searchString);
    fetchRecipe(searchString);
  };

  const searches = [
    "pizza",
    "pasta",
    "burger",
    "biriyani",
    "chicken",
    "salad",
    "soup",
    "cake",
    "ice cream",
    "sandwich",
  ];

  return (
    <div>
      <div className="previous-search section">
        <h2>What’s on your mind? Search recipes by keyword!</h2>
        <div className="previous-search-container">
          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
              onClick={() => handleSearchClick(search)}
            >
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={onTextChange}
          />
          <button className="btn" onClick={() => fetchRecipe(searchTerm)}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}
