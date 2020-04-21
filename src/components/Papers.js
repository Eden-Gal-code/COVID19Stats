import React, { useState } from "react";
import MyPaper from "./Paper";
import Grid from "@material-ui/core/Grid";
import { ReactReduxContext } from "react-redux";
const Papers = function Papers(props) {
  const [data, setData] = useState(props.Data[props.Data.length - 1]);
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        store.subscribe(() => {
          if (Array.isArray(store.getState().countryData[0])) {
            setData(
              store.getState().countryData[0][
                store.getState().countryData[0].length - 1
              ]
            );
          } else {
            store.getState().countryData[0].then((arr) => {
              setData(arr[arr.length - 1]);
            });
          }
        });

        return (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <MyPaper
                title="Confirmed"
                number={data ? data.confirmed : "loading"}
                date={data ? data.date : "loading"}
              />
            </Grid>
            <Grid item xs={4}>
              <MyPaper
                title="Deaths"
                number={data ? data.deaths : "loading"}
                date={data ? data.date : "loading"}
              />
            </Grid>
            <Grid item xs={4}>
              <MyPaper
                title="Recovered"
                number={data ? data.recovered : "loading"}
                date={data ? data.date : "loading"}
              />
            </Grid>
          </Grid>
        );
      }}
    </ReactReduxContext.Consumer>
  );
};
export default Papers;
