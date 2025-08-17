import React from "react";

function Paragraph({ customClass, text }) {
  return <div className={` ${customClass}`}>{text}</div>;
}

export default Paragraph;
