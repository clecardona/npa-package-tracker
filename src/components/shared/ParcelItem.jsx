import React from "react";
import { useTranslation } from "react-i18next";

export default function ParcelItem({ label, value, color }) {
  const [t, i18n] = useTranslation("common");
  return (
    <div className={label}>
      <h3>{t(label)}:</h3>
      <p className={color}> {t(`${value}`)}</p>
    </div>
  );
}
