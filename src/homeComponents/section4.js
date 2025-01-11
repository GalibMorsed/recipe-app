import ChefCards from "./chefCards";

export default function Section4() {
  const chefs = [
    {
      name: "Gordon Ramsay",
      recipeCount: 120,
      cuisine: "British",
      img: "/images/chefsimg/chef1.jpg",
    },
    {
      name: "Bobby Flay",
      recipeCount: 165,
      cuisine: "American",
      img: "/images/chefsimg/chef2.jpg",
    },
    {
      name: "Ree Drummond",
      recipeCount: 112,
      cuisine: "American",
      img: "/images/chefsimg/chef3.jpg",
    },
    {
      name: "Ina Garten",
      recipeCount: 1272,
      cuisine: "American",
      img: "/images/chefsimg/chef4.jpg",
    },
    {
      name: "Rodolfo Guzman",
      recipeCount: 100,
      cuisine: "Chilean",
      img: "/images/chefsimg/chef5.jpg",
    },
    {
      name: "Giada De Laurentiis",
      recipeCount: 200,
      cuisine: "Italian",
      img: "/images/chefsimg/chef6.jpg",
    },
  ].sort(() => Math.random() - 0.5);
  return (
    <div className="section4 section">
      <h1 className="title">Worlds Top Chefs</h1>
      <div className="top-chefs-container">
        {chefs.map((chef) => (
          <ChefCards key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
}
