import React from "react";
import { useTranslation } from "react-i18next";

export default function ButtonMain({ label, onClick }) {
  const [t, i18n] = useTranslation("common");
  return (
    <button className="btn btn-main btn-140" onClick={onClick}>
      <h3>{t(label)}</h3>
    </button>
  );
}
