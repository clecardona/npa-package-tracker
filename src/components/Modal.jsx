import React from "react";
import reactDom from "react-dom";
import Map from "./shared/Map";
import { CSSTransitionGroup } from "react-transition-group-v1";

import cross from "../assets/icns/cross.svg";
import { getStatus, getEta } from "./parcelMethods";

export default function Modal({ isOpen, onClose, item }) {
  const formattedEta = getEta(item.eta);
  const status = getStatus(item.status)[0];

  const coordinates = {
    lat: item.location_coordinate_latitude,
    lng: item.location_coordinate_longitude,
  };

  if (!isOpen) return null;

  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      <CSSTransitionGroup
        transitionName={"fade-in"}
        transitionAppear={true}
        transitionAppearTimeout={400}
      >
        <div className="modal">
          <div className="modal-header">
            <h2>Parcel #{item.parcel_id}</h2>
            <button className="btn-close" onClick={onClose}>
              <img alt="close" src={cross} />
            </button>
          </div>
          <div className="modal-map">
            <Map coordinates={coordinates} />
          </div>

          <div className="location">
            <h3>Pickup location:</h3>
            <p>{item.location_name}</p>
          </div>
          <div className="status">
            <h3>Status: </h3>
            <p>{status}</p>
          </div>
          <div className="eta">
            <h3>Estimated arrival:</h3>
            <p>{formattedEta}</p>
          </div>

          <div className="sender">
            <h3>Sender:</h3>
            <p>{item.sender}</p>
          </div>

          <div className="notes">
            <h3>Notes:</h3>
            <p>
              {item.notes} {item.notes === null && "no notes provided"}
            </p>
          </div>
        </div>
      </CSSTransitionGroup>
    </>,
    document.getElementById("modal")
  );
}
