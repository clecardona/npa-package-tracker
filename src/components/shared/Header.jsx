import React from "react";
import parcel from "../../assets/icns/parcel.svg";

export default function Header() {
  return (
    <header>
      <img src={parcel} alt="logo" />

      <h2>Trackcel </h2>
      <h3>your Package Tracker</h3>
    </header>
  );
}
