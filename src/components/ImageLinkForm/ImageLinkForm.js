import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className="f3 center">
        {"This magic brain will detect faces in your pictures, give it a try !"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" placeholder="Enter image url..." onChange={onInputChange}/>
          <button className="button w30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onImageSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
