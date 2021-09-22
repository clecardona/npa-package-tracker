import React, { useEffect, useState } from "react";
import api_mockup from "../assets/api_mockup.json";
import Parcel from "./Parcel";
import Spinner from "./shared/Spinner";
import { CSSTransitionGroup } from "react-transition-group-v1";
import { useTranslation } from "react-i18next";

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
      {status === 1 && (
        <div className="load-error">
          Cannot load data . Please check your connection
        </div>
      )}
      {status === 2 && (
        <section className="section-parcels">
          <h2>{t("parcels")}</h2>
          <CSSTransitionGroup
            transitionName={"fade-up"}
            transitionAppear={true}
            transitionAppearTimeout={400}
          >
            {Parcels}
          </CSSTransitionGroup>
        </section>
      )}
    </main>
  );
}
