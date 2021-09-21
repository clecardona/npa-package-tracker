import React from "react";
import listOfParcels from "../assets/api_mockup.json";

export default function Parcels() {
  const Parcels = listOfParcels.map((item) => {
    return (
      <article key={item.id}>
        <h2 className="title">#{item.parcel_id}</h2>
        <div className="status">
          <h3>Status: </h3>
          <p>{item.status}</p>
        </div>
        <div className="eta">
          <h3>Estimated arrival:</h3>
          <p>{item.eta}</p>
        </div>
        <div className="location">
          <h3>Pickup location:</h3>
          <p>{item.location_name}</p>
        </div>
        <button className="btn btn-main btn-140">
          <h3>More details</h3>
        </button>
      </article>
    );
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
