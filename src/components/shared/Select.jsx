import React, { useState } from "react";

export default function Select({ selectLanguage }) {
  const language = JSON.parse(localStorage.getItem("lang"));
  const [state, setState] = useState(true);

  function modifyLanguage(event) {
    selectLanguage(event.target.value);
    setState(!state);
  }
  return (
    <div className="btn btn-ghost ">
      <select
        className=" btn-select"
        onChange={modifyLanguage}
        value={language}
      >
        <option className="country" value="en">
          🇬🇧
        </option>
        <option value="sv">🇸🇪</option>
        <option value="fr">🇫🇷</option>
      </select>
    </div>
  );
}
