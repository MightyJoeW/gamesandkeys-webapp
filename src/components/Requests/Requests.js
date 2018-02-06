import React from "react";
import "./Requests.css";

const Requests = () => (
  <div>
    <h1 className="views-title"> Requests </h1>
    <form className="form-wrapper">
      <label className="form__labels">Song Title:</label>
      <input className="form__inputs" type="text" name="name" required />

      <label className="form__labels">Artist/Composer:</label>
      <input className="form__inputs" type="text" name="name" />

      <label className="form__labels">Link to Original:</label>
      <input className="form__inputs" type="text" name="name" />

      <input id="form__button" type="submit" value="Submit" />
    </form>
  </div>
);

export default Requests;
