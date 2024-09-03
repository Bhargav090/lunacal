import React, { useState } from "react";
import img1 from "../assets/Vector.png";
import img2 from "../assets/img2.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import imgm1 from "../assets/imgm1.jpeg";
import imgm2 from "../assets/imgm2.jpeg"
import imgm3 from "../assets/imgm3.jpeg"

export default function Bottom() {
  const [images, setImages] = useState([imgm1, imgm2,imgm3]); 
  const [startIndex, setStartIndex] = useState(0);

  const handleAddImage = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (startIndex < images.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="bottom">
      <img src={img1} alt="question mark" className="img1" />
      <div className="navele">
        <button className="btn1">Gallery</button>
        <div className="arrow-buttons">
          <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            id="file-input"
            onChange={handleAddImage}
          />
          <button
            className="btn2"
            onClick={() => document.getElementById("file-input").click()}
          >
            + ADD IMAGE
          </button>
          <button className="btn-circle" onClick={handleLeftClick}>
            <img src={left} alt="left" />
          </button>
          <button className="btn-circle" onClick={handleRightClick}>
            <img src={right} alt="right" />
          </button>
        </div>
      </div>
      <img src={img2} alt="question mark" className="img2" />
      <div className="content2">
        {images.slice(startIndex, startIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className="display-image"
            style={{ borderRadius: "16px" }}
          />
        ))}
      </div>
    </div>
  );
}
