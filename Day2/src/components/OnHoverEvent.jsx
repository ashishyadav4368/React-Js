import React from "react";

const OnHoverEvent = () => {
  const handleHover = () => {
    alert("Mouse hata le bhai ...hathapayi ho jayegi");
  };
  return (
    <div>
      <h1 onMouseOver={handleHover}>Hover mat krna mere upar</h1>
    </div>
  );
};

export default OnHoverEvent;
