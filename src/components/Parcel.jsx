import React, { useState } from "react";
import Modal from "./Modal";
import { getStatus, getEta } from "./parcelMethods";

export default function Parcel({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const formattedEta = getEta(item.eta);
  const status = getStatus(item.status)[0];
  const statusColor = getStatus(item.status)[1];

  return (
    <article key={item.id}>
      <h2 className="title">#{item.parcel_id}</h2>
      <div className="status">
        <h3>Status: </h3>
        <p className={statusColor}>{status}</p>
      </div>
      <div className="eta">
        <h3>Estimated arrival:</h3>
        <p>{formattedEta}</p>
      </div>
      <div className="location">
        <h3>Pickup location:</h3>
        <p>{item.location_name}</p>
      </div>
      <button className="btn btn-main btn-140" onClick={() => setIsOpen(true)}>
        <h3>More details</h3>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} item={item} />
    </article>
  );
}
