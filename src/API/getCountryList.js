import { useState, useEffect } from "react";
import axios from "axios";

export function useCountryList() {
  const [dataC, setDataC] = useState(null);

  useEffect(() => {
    const temp = { list: [] };
    axios
      .get("https://pomber.github.io/covid19/timeseries.json")
      .then((res) => {
        for (var key in res.data) {
          temp.list.push(key);
        }
        setDataC(temp);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return dataC;
}
