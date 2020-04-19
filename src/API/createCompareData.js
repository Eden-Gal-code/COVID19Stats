export function createCompareData(Data, countryData, countryName) {
  if (countryData === null) {
    return Data;
  }
  const temp = [];
  for (let i = 0; i < Data.length; i++) {
    var obj = {
      date: Data[i].date,
      confirmed: Data[i].confirmed,
      deaths: Data[i].deaths,
      recovered: Data[i].recovered,
    };
    obj[countryName + "_confirmed"] = countryData[i].confirmed;
    obj[countryName + "_deaths"] = countryData[i].deaths;
    obj[countryName + "_recovered"] = countryData[i].recovered;
    temp.push(obj);
  }
  return temp;
}
