import React, { useState, useEffect } from "react";
import "./styles/base.sass";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ParcelsContainer from "./components/ParcelsContainer";
import { useTranslation } from "react-i18next";

//todo - host the project

export default function App() {
  const [t, i18n] = useTranslation("common");
  const languageLocal = JSON.parse(localStorage.getItem("lang"));
  const [state, setstate] = useState(true);

  function selectLanguage(value) {
    localStorage.setItem("lang", JSON.stringify(value));
    setstate(!state);
  }

  useEffect(() => {
    i18n.changeLanguage(languageLocal);
  }, [state, i18n, languageLocal]);

  return (
    <div className="App">
      <Header selectLanguage={selectLanguage} />

      <ParcelsContainer />

      <Footer />
    </div>
  );
}
