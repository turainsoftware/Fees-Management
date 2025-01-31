import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import notfound from './../../assets/images/not-found.png'

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
          src={notfound}
          alt="Illustration of a person looking confused or lost"
          className="illustration-image"
        />
      </div>
    </div>
  );
};

export default NotFound;