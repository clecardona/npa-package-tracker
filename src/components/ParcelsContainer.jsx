import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//import api_mockup from "../assets/api_mockup.json"; // backup version
import Parcel from "./Parcel";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";
import AnimateContainer from "./shared/AnimateContainer";

export default function ParcelsContainer() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);
  const [t, i18n] = useTranslation("common");
  const API_URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  const Parcels = data.map((item) => {
    return <Parcel item={item} key={item.id} />;
  });

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetchFail(error));
  }, []);

  function onFetchSuccess(json) {
    setData(json);
    setStatus(2);
  }
  function onFetchFail(error) {
    console.log("Error", error);
    setStatus(1);
  }
  return (
    <main>
      {status === 0 && <Spinner />}
      {status === 1 && <BoxError />}
      {status === 2 && (
        <section className="section-parcels">
          <h3>{t("hello")} Carl Johan !</h3>
          <h2>
            {t("here-are-your")} {t("parcels")} :
          </h2>
          <AnimateContainer animation="fade-up">{Parcels}</AnimateContainer>
        </section>
      )}
    </main>
  );
}
