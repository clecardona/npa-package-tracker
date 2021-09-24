import React from "react";
import { useTranslation } from "react-i18next";

export default function ModalItem({ label, value }) {
  const [t, i18n] = useTranslation("common");
  return (
    <div className={label}>
      <h3>{t(label)}:</h3>
      {value === null ? (
        <p>{t("no-notes-provided")}</p>
      ) : (
        <p>{t(`${value}`)}</p>
      )}
    </div>
  );
}
