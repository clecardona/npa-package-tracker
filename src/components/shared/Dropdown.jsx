import React, { useState } from "react";

import DropdownItem from "./DropdownItem";
import AnimateContainer from "./AnimateContainer";
import down from "../../assets/icns/down.svg";

export default function Dropdown({ selectLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const language = JSON.parse(localStorage.getItem("lang"));
  const [state, setState] = useState(true);

  function modifyLanguage(lang) {
    selectLanguage(lang);
    setState(!state);
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-ghost"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h4>Language</h4>

        <img src={down} alt="down" className="dropdown-arrow" />
      </button>

      {isOpen && (
        <AnimateContainer animation="fade-down">
          <div className="caret">
            <ul>
              <DropdownItem modifyLanguage={modifyLanguage} reference={"en"} />
              <DropdownItem modifyLanguage={modifyLanguage} reference={"sv"} />
              <DropdownItem modifyLanguage={modifyLanguage} reference={"fr"} />
            </ul>
          </div>
        </AnimateContainer>
      )}
    </div>
  );
}
