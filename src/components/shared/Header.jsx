import React from "react";
import parcel from "../../assets/icns/parcel.svg";
import Select from "./Select";

export default function Header({ selectLanguage }) {
  return (
    <header>
      <img src={parcel} alt="logo" />

      <h2>
        <strong>Track</strong>cel <br />
        <h4>your Package Tracker</h4>
      </h2>
      <Select selectLanguage={selectLanguage} />
    </header>
  );
}
