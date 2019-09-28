import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <p>
        Hello each link will show you how filter an array of state in a class
        and hook will work
      </p>
      <Link to={"/class"}>Go to Class Component filter list</Link>
      <br />
      <br />
      <Link to={"/hooks"}>Go to Hooks Component filter list</Link>
    </div>
  );
};

export default Welcome;
