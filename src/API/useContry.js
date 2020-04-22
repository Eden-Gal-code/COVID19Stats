import axios from "axios";

export async function getCountry(country) {
  // eslint-disable-next-line

  const data = await axios
    .get("https://pomber.github.io/covid19/timeseries.json")
    .then((res) => {
      if (country !== null && country !== undefined && country !== "Global") {
        return res.data[country];
      } else {
        const temp = [];
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
        return temp;
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
}
