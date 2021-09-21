import React from "react";
import parcel from "../../assets/icns/parcel.svg";

export default function Header() {
  return (
    <header>
      <img src={parcel} alt="logo" />

      <h2>
        <strong>Track</strong>cel
      </h2>
      <h4>your Package Tracker</h4>
    </header>
  );
}
