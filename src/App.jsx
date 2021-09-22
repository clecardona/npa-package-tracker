import React from "react";
import "./styles/base.sass";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ParcelsContainer from "./components/ParcelsContainer";
import { useTranslation } from "react-i18next";

//todo -persist language in localHost
//todo-implement estonian
//todo - spinner full css
//todo-on reload mobile scrolldown

export default function App() {
  const [t, i18n] = useTranslation("common");

  function selectLanguage(value) {
    i18n.changeLanguage(value);
  }

  return (
    <div className="App">
      <Header selectLanguage={selectLanguage} />
      <main>
        <ParcelsContainer />
      </main>
      <Footer />
    </div>
  );
}
