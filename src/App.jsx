import React, { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0); // 1st render

  // Runs only when hasLiked changes
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  // Runs only once on the first render
  useEffect(() => {
    console.log(`CARD RENDERED`);
  }, []);

  return (
    <div className="card" onClick={() => setCount((prev) => prev + 1)}>
      <h2>
        {title} <br /> {count}
        {/* Conditionally rendered 1*/}
        <br /> {count ? count : null}
        {/* Conditionally rendered 2*/}
        <br /> {count || null}
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "<3" : "Like"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Movie 1" />
      <Card title="Movie 2" />
      <Card title="Movie 3" />
    </div>
  );
};

export default App;

// TIME 35min
