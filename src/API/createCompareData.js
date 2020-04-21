export function createCompareData(Data, countryData, countryName) {
  const temp = [];
  for (let i = 0; i < countryData.length; i++) {
    let obj = Data[i] ? Data[i] : {};
    obj[countryName + "_confirmed"] = countryData[i].confirmed;
    obj[countryName + "_deaths"] = countryData[i].deaths;
    obj[countryName + "_recovered"] = countryData[i].recovered;
    obj["date"] = countryData[i].date;
    temp.push(obj);
  }
  return temp;
}
