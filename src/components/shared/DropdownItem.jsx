import React from "react";

import en from "../../assets/icns/en.png";
import sv from "../../assets/icns/sv.png";
import fr from "../../assets/icns/fr.png";

export default function DropdownItem({ modifyLanguage, reference }) {
  function getLabel(value) {
    switch (value) {
      case "en":
        return ["English", en];
      case "sv":
        return ["Svenska", sv];
      case "fr":
        return ["Français", fr];
      default:
        return null;
    }
  }
  const label = getLabel(reference)[0];
  const icon = getLabel(reference)[1];

  return (
    <li>
      <button
        className="dropdown-item"
        onClick={() => modifyLanguage(reference)}
      >
        <img src={icon} alt="uk" className="img-30" />
        <h4>{label}</h4>
      </button>
    </li>
  );
}
