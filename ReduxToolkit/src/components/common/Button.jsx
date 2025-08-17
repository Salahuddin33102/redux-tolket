import React from "react";

function Button({ text, customClass, onClick }) {
  return (
    <button
      className={`cursor-pointer text-base ${customClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
