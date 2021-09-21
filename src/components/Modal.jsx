import React from "react";
import reactDom from "react-dom";

import cross from "../assets/icns/cross.svg";

export default function Modal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <div className="modal-header">
          <h2>Parcel #{item.parcel_id}</h2>
          <button className="btn-close" onClick={onClose}>
            <img alt="close" src={cross} />
          </button>
        </div>

        <img
          className="modal-map"
          src="https://millerpoultry.com/wp-content/uploads/2019/04/Map-Placeholder.png"
          alt="map"
        />
        <div className="location">
          <h3>Pickup location:</h3>
          <p>{item.location_name}</p>
        </div>
        <div className="status">
          <h3>Status: </h3>
          <p>{item.status}</p>
        </div>
        <div className="eta">
          <h3>Estimated arrival:</h3>
          <p>{item.eta}</p>
        </div>

        <div className="sender">
          <h3>Sender:</h3>
          <p>{item.sender}</p>
        </div>

        <div className="notes">
          <h3>Notes:</h3>
          <p>{item.notes}</p>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
