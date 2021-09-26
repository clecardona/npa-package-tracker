import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./styles/base.sass";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ParcelsContainer from "./components/ParcelsContainer";

export default function App() {
  const [t, i18n] = useTranslation("common");
  const languageLocal = JSON.parse(localStorage.getItem("lang"));
  const [reload, setReload] = useState(true);

  function selectLanguage(value) {
    localStorage.setItem("lang", JSON.stringify(value));
    setReload(!reload);
  }

  useEffect(() => {
    i18n.changeLanguage(languageLocal);
  }, [reload, i18n, languageLocal]);

  return (
    <div className="App">
      <Header selectLanguage={selectLanguage} />
      <ParcelsContainer />
      <Footer />
    </div>
  );
}
