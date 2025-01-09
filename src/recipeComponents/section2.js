export default function Section2({ recipes }) {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div className="recipe-cart" key={index}>
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            style={{
              height: "250px",
              objectFit: "cover",
            }}
          />
          <div className="recipe-card-info">
            <span className="recipe-title">{recipe.recipe.label}</span>
            <br />
            <span className="recipe-desc">
              {recipe.recipe.cuisineType
                ? recipe.recipe.cuisineType.join(", ")
                : "No description available"}
            </span>
            <br />
            <span
              className="view-btn"
              onClick={() => window.open(recipe.recipe.url, "_blank")}
            >
              VIEW RECIPE
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
