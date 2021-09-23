import React, { useState } from "react";
import { getStatusColor, getEta } from "../utils/parcelMethods";
import { useTranslation } from "react-i18next";

import Modal from "./Modal";
import ParcelItem from "./shared/ParcelItem";
import ButtonMain from "./shared/ButtonMain";

export default function Parcel({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation("common");

  const formattedEta = getEta(item.eta);
  const statusColor = getStatusColor(item.status);

  return (
    <article key={item.id}>
      <h2 className="title">#{item.parcel_id}</h2>
      <ParcelItem label="status" value={item.status} color={statusColor} />
      <ParcelItem label="eta" value={formattedEta} />
      <ParcelItem label="location" value={item.location_name} />
      <ButtonMain label="more-details" onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} item={item} />
    </article>
  );
}
