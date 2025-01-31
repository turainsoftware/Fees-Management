import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="circle circle-yellow"></div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Oops!</h2>
        <h3 className="not-found-message">Page Not Found</h3>
        <p className="not-found-description">
          The page you are looking for doesn't exist or has been removed.
          <br />
          We suggest you go back to the homepage.
        </p>
        <Link to={"/"} className="not-found-button">
          Back to Home
        </Link>
      </div>
      <div className="not-found-illustration">
        <div className="circle circle-pink"></div>
        <div className="circle circle-green"></div>
        <img
          src="https://images.unsplash.com/photo-1552082455-f24775e42973?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zdCUyMGJvdXQlMjB0aGVtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Illustration of a person looking confused or lost"
          className="illustration-image"
        />
      </div>
    </div>
  );
};

export default NotFound;