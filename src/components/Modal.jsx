import React from "react";
import reactDom from "react-dom";
import { CSSTransitionGroup } from "react-transition-group-v1";
import { useTranslation } from "react-i18next";

import Map from "./shared/Map";
import { getEta } from "../utils/parcelMethods";
import ButtonClose from "./shared/ButtonClose";
import ModalItem from "./shared/ModalItem";

export default function Modal({ isOpen, onClose, item }) {
  const [t, i18n] = useTranslation("common");
  const formattedEta = getEta(item.eta);

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
            <ButtonClose onClose={onClose} />
          </div>
          <div className="modal-map">
            <Map coordinates={coordinates} />
          </div>
          <ModalItem label="location" value={item.location_name} />
          <ModalItem label="status" value={item.status} />
          <ModalItem label="eta" value={formattedEta} />
          <ModalItem label="sender" value={item.sender} />
          <ModalItem label="notes" value={item.notes} />
        </div>
      </CSSTransitionGroup>
    </>,
    document.getElementById("modal")
  );
}
