import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hooks = () => {
  const [list] = useState([
    "Berries",
    "Apples",
    "Bananas",
    "Pineapples",
    "Coconut",
    "Mangos",
    "Grapes",
    "Melons"
  ]);

  const [input, setInput] = useState();

  const inputHandler = event => {
    setInput(event.target.value);
  };

  const fruit = list
    .filter(element => {
      return element.toLowerCase().includes(input);
    })
    .map((element, index) => {
      return <h3 key={index}>{element}</h3>;
    });

  return (
    <div>
      <Link to={"/"}>
        <button>Back to Home</button>
      </Link>
      <h2> Function Component filtering of Hook state array</h2>
      <br />
      <input type="text" onChange={inputHandler} />
      {fruit}
    </div>
  );
};

export default Hooks;
