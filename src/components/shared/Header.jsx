import React from "react";
import parcel from "../../assets/icns/parcel.svg";
import Select from "./Select";
import { useTranslation } from "react-i18next";

export default function Header({ selectLanguage }) {
  const [t, i18n] = useTranslation("common");
  return (
    <header>
      <img src={parcel} alt="logo" />

      <h2>
        <strong>Track</strong>cel <br />
        <h4>{t("subtitle")}</h4>
      </h2>
      <Select selectLanguage={selectLanguage} />
    </header>
  );
}
