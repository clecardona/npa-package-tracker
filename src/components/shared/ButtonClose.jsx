import React from "react";
import cross from "../../assets/icns/cross.svg";

export default function ButtonClose({ onClose }) {
  return (
    <button className="btn-close" onClick={onClose}>
      <img alt="close" src={cross} />
    </button>
  );
}
