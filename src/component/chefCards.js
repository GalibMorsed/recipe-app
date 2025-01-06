import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ChefCards({ chef }) {
  return (
    <div className="chef-cards">
      <img src={chef.img} alt="" />
      <div className="chef-card-info">
        <h3 className="chef-card-name">{chef.name}</h3>
        <p className="chef-recipe-count">
          Recipes: <b>{chef.recipeCount}</b>
        </p>
        <p className="chef-cuisine">
          Cuisine <b>{chef.cuisine}</b>
        </p>
        <p className="chef-icons">
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faInstagramSquare} />
        </p>
      </div>
    </div>
  );
}
