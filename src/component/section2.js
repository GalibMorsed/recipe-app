export default function Section2() {
  const list = [
    "Learn new recipes",
    "Experiment with new ingredients",
    "Write your own recipes",
    "Know about different cuisines",
    "Get to know about different cooking techniques",
    "Get ranked in the leaderboard",
  ];
  return (
    <div className="section2 section">
      <div className="cart img">
        <img src="/images/foodsimg/img11.avif" alt="" />
      </div>
      <div className="cart texts">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p key={index} className="items">
            {item}
          </p>
        ))}
        <button className="btn">signup now</button>
      </div>
    </div>
  );
}
