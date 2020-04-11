export function DataPerDay(Data) {
  if (Data === null) {
    return null;
  }
  const temp = [];
  for (let i = 0; i < Data.length; i++) {
    if (i === 0) {
      temp.push(Data[i]);
    } else {
      temp.push({
        date: Data[i].date,
        confirmed: Data[i].confirmed - Data[i - 1].confirmed,
        deaths: Data[i].deaths - Data[i - 1].deaths,
        recovered: Data[i].recovered - Data[i - 1].recovered,
      });
    }
  }
  return temp;
}
