import React, { useState } from "react";
import Modal from "./Modal";
import { getStatusColor, getEta } from "./parcelMethods";
import { useTranslation } from "react-i18next";

export default function Parcel({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation("common");

  const formattedEta = getEta(item.eta);
  const statusColor = getStatusColor(item.status);

  return (
    <article key={item.id}>
      <h2 className="title">#{item.parcel_id}</h2>
      <div className="status">
        <h3>{t("status")}:</h3>
        <p className={statusColor}>{t(`${item.status}`)}</p>
      </div>
      <div className="eta">
        <h3>{t("eta")}:</h3>
        <p>{formattedEta}</p>
      </div>
      <div className="location">
        <h3>{t("pickup-location")}:</h3>
        <p>{item.location_name}</p>
      </div>
      <button className="btn btn-main btn-140" onClick={() => setIsOpen(true)}>
        <h3>{t("more-details")}</h3>
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} item={item} />
    </article>
  );
}
