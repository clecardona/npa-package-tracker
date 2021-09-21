import React from "react";
import geoPin from "../../assets/icns/geoPin.svg";

export default function MapMarker() {
  return <img className="marker" src={geoPin} alt="pin" />;
}
