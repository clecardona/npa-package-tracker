import React from "react";
import { useTranslation } from "react-i18next";

// This on the other hand is may be used frequently so is ok to have as a component
export default function ButtonMain({ label, onClick }) {
  const [t, i18n] = useTranslation("common");
  return (
    <button className="btn btn-main btn-140" onClick={onClick}>
      <h3>{t(label)}</h3>
    </button>
  );
}
