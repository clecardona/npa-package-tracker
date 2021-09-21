import React, { useEffect, useState } from "react";
import api_mockup from "../assets/api_mockup.json";
import Parcel from "./Parcel";

export default function ParcelsContainer() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);

  const API_URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  const Parcels = api_mockup.map((item) => {
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
    <div>
      {status === 0 && <div className="spinner">Loading...</div>}
      {status === 1 && (
        <div className="load-error">
          Cannot load data . Please check your connection
        </div>
      )}
      {status === 2 && (
        <section className="section-parcels">
          <h2>Parcels</h2>
          {Parcels}
        </section>
      )}
    </div>
  );
}
