import React from "react";
import { useTranslation } from "react-i18next";

import parcel from "../assets/icns/parcel.svg";
import Dropdown from "./shared/Dropdown";

export default function Header({ selectLanguage }) {
  const [t, i18n] = useTranslation("common");
  return (
    <>
      <header>
        <div className="header-container">
          <img src={parcel} alt="logo" />
          <div className="header-title">
            <h2>
              <strong>Track</strong>cel <br />
            </h2>
            <h4>{t("subtitle")}</h4>
          </div>

          <Dropdown selectLanguage={selectLanguage} />
        </div>
      </header>
    </>
  );
}
