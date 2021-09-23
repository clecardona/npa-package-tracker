import React from "react";
import { useTranslation } from "react-i18next";

import parcel from "../../assets/icns/parcel.svg";
import Select from "./Select";

export default function Header({ selectLanguage }) {
  const [t, i18n] = useTranslation("common");
  return (
    <header>
      <div className="header-container">
        <img src={parcel} alt="logo" />

        <h2>
          <strong>Track</strong>cel <br />
          <h4>{t("subtitle")}</h4>
        </h2>
        <Select selectLanguage={selectLanguage} />
      </div>
    </header>
  );
}
