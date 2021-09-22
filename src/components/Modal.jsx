import React from "react";
import reactDom from "react-dom";
import Map from "./shared/Map";
import { CSSTransitionGroup } from "react-transition-group-v1";

import { useTranslation } from "react-i18next";

import cross from "../assets/icns/cross.svg";
import { getStatusColor, getEta } from "./parcelMethods";

export default function Modal({ isOpen, onClose, item }) {
  const [t, i18n] = useTranslation("common");
  const formattedEta = getEta(item.eta);
  const status = getStatusColor(item.status);

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
            <h2>
              {t("parcel")} #{item.parcel_id}
            </h2>
            <button className="btn-close" onClick={onClose}>
              <img alt="close" src={cross} />
            </button>
          </div>
          <div className="modal-map">
            <Map coordinates={coordinates} />
          </div>

          <div className="location">
            <h3>{t("pickup-location")}:</h3>
            <p>{item.location_name}</p>
          </div>
          <div className="status">
            <h3>{t("status")}: </h3>
            <p>{t(`${item.status}`)}</p>
          </div>
          <div className="eta">
            <h3>{t("eta")}:</h3>
            <p>{formattedEta}</p>
          </div>

          <div className="sender">
            <h3>{t("sender")}:</h3>
            <p>{item.sender}</p>
          </div>

          <div className="notes">
            <h3>{t("notes")}:</h3>
            <p>
              {item.notes} {item.notes === null && `${t("no-notes-provided")}`}
            </p>
          </div>
        </div>
      </CSSTransitionGroup>
    </>,
    document.getElementById("modal")
  );
}
