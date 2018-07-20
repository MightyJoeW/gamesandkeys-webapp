import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="notFound__title">
        {/* <p className="notFound__row notFound__row--top"> 404 </p>
        <p className="notFound__row notFound__row--second">Not Found</p>
        <img
          class="notFound__img"
          src="http://www.magic-emoji.com/emoji/images/1317_emoji_iphone_thinking_face.png"
          alt="Sad Face emoticon"
        />
        <p className="notFound__row notFound__row--bottom">
          The page you are looking for doesn't exist.
          <Link className="notFound__link" to="/dashboard">
            &nbsp;Return to Dashboard
          </Link>.
        </p> */}
      </div>
    );
  }
}

export default NotFound;
