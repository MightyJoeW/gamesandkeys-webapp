import React from "react";
import "./Requests.css";

const Requests = () => (
  <div>
    <h1 className="views-title"> Requests </h1>
    <form className="form-wrapper">
      <label className="form-labels">Song Title:</label>
      <input className="form-inputs" type="text" name="name" required />

      <label className="form-labels">Artist/Composer:</label>
      <input className="form-inputs" type="text" name="name" />

      <label className="form-labels">Link to Original:</label>
      <input className="form-inputs" type="text" name="name" />

      <input id="form-button" type="submit" value="Submit" />
    </form>
  </div>
);

export default Requests;
