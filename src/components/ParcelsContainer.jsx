import React from "react";
import listOfParcels from "../assets/api_mockup.json";
import Parcel from "./Parcel";

export default function ParcelsContainer() {
  const Parcels = listOfParcels.map((item) => {
    return <Parcel item={item} key={item.id} />;
  });

  return (
    <div>
      <section className="section-parcels">
        <h2>Parcels</h2>
        {Parcels}
      </section>
    </div>
  );
}
