import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./styles/base.sass";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ParcelsContainer from "./components/ParcelsContainer";

export default function App() {
  const [t, i18n] = useTranslation("common");
  const languageLocal = JSON.parse(localStorage.getItem("lang")); // You don't need to parse the language stored in local storage as is a simple string, not an array.
  const [reload, setReload] = useState(true);

  // you can store the language in a statre and also save to local storage instead of having a state called reload.
  // even if it acomplishes the same, this approach of reload sounds like a hack/patch -1
  function selectLanguage(value) {
    localStorage.setItem("lang", JSON.stringify(value));
    // setReload(!reload);
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
