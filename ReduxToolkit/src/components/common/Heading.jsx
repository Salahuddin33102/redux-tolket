import React from "react";

function Heading({ text, customClass, text2 }) {
  return (
    <div className={`font-bold ${customClass}`}>
      {text} {text2}
    </div>
  );
}

export default Heading;
