import { useState, useEffect } from "react";
import axios from "axios";

export function useCountry(country) {
  const [dataC, setDataC] = useState(null);
  useEffect(() => {
    axios
      .get("https://pomber.github.io/covid19/timeseries.json")
      .then((res) => {
        if (country !== null) {
          setDataC(res.data[country]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  if (country === null) {
    return null;
  }
  return dataC;
}
