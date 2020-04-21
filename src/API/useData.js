import { useState, useEffect } from "react";
import axios from "axios";

export function useData(country) {
  const [dataC, setDataC] = useState(null);

  useEffect(() => {
    const temp = [];
    axios
      .get("https://pomber.github.io/covid19/timeseries.json")
      .then((res) => {
        if (country !== undefined && country !== "Global") {
          setDataC(res.data[country]);
        } else {
          for (let i = 0; i < res.data.Israel.length; i++) {
            for (const key in res.data) {
              if (key === "Afghanistan") {
                temp.push(res.data[key][i]);
              } else {
                temp[i].confirmed += res.data[key][i].confirmed;
                temp[i].deaths += res.data[key][i].deaths;
                temp[i].recovered += res.data[key][i].recovered;
              }
            }
          }
          setDataC(temp);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [country]);
  return dataC;
}
