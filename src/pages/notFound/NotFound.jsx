import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page NotFound</h2>
        <Link to="/home" className="btn ">
          Go back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
