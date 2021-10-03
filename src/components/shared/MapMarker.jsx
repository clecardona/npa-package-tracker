import React from "react";

import geoPin from "../../assets/icns/geoPin.svg";

// This can be inside map, is not neccesary to break further, expecially because it will be never used outside the map itself.
export default function MapMarker() {
  return <img className="marker" src={geoPin} alt="pin" />;
}
