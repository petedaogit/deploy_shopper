import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          I absolutely love this long-sleeve red turtleneck! The quality is
          fantastic, and the fit is true to size. The fabric is soft and
          comfortable, making it perfect for layering or wearing on its own. The
          red color is vibrant and adds a pop of personality to any outfit. I've
          already gotten so many compliments on it! Highly recommend this
          purchase.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
