export function createCompareData(Data, countryData) {
  if (countryData === null) {
    return Data;
  }
  const temp = [];
  for (let i = 0; i < Data.length; i++) {
    temp.push({
      date: Data[i].date,
      confirmed: Data[i].confirmed,
      deaths: Data[i].deaths,
      recovered: Data[i].recovered,
      confirmed1: countryData[i].confirmed,
      deaths1: countryData[i].deaths,
      recovered1: countryData[i].recovered,
    });
  }
  return temp;
}
