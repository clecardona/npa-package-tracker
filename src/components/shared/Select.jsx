import React from "react";

export default function Select({ selectLanguage }) {
  return (
    <div className="btn btn-ghost ">
      <select
        className=" btn-select"
        onChange={(event) => selectLanguage(event.target.value)}
      >
        <option className="country" value="en">
          🇬🇧
        </option>
        <option value="sv">🇸🇪</option>
        <option value="fr">🇫🇷</option>
        <option value="est">🇪🇪</option>
      </select>
    </div>
  );
}
