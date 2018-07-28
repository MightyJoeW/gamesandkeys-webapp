import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="notFound__title">
        <p className="notFound__row notFound__row--top"> 404 </p>
        <p className="notFound__row notFound__row--second">Not Found</p>
        <div
          class="notFound__img"
        />
        <p className="notFound__row notFound__row--bottom">
          The page you are looking for doesn't exist.
          <Link className="notFound__link" to="/">
            &nbsp;Return Home
          </Link>.
        </p>
      </div>
    );
  }
}

export default NotFound;
