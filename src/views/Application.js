import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  useCountryList,
  useData,
  DataPerDay,
  useCountry,
  createCompareData,
} from "../API";
import { ReactReduxContext } from "react-redux";
import NavBar from "../components/NavBar";
import Papers from "../components/Papers";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RegularGraph from "../components/RegularGraph";
import Grid from "@material-ui/core/Grid";
import Headline from "../components/Headline";
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {},
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
//Reducer
function reducer(state, action) {
  let obj;
  switch (action.type) {
    case "Select_One_Country":
      console.log(state);
      obj = action.payload;
      obj.choice = state.choice;
      return obj;
    case "Change_Choice":
      obj = action.payload;
      obj.countries = state.countries;
      obj.countryData = state.countryData;
      return obj;
    case "Add_Country":
      obj = state;
      obj.countries.push(action.payload.countries[0]);
      obj.countryData.push(action.payload.countryData[0]);
      return obj;
    default:
      return state;
  }
}
//main App
const Application = function Application() {
  const classes = useStyles();
  //GlobalData
  const Data = useData("Global");
  //setting redux
  const store = createStore(reducer, {
    choice: "Global Stats",
    countries: ["Global"],
    countryData: [Data],
  });

  const CountryList = useCountryList();

  console.log(store.getState());

  return (
    <React.Fragment>
      <Provider store={store}>
        <NavBar className={classes.appBar} list={CountryList}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Headline />
              <Divider />
            </Grid>
            <Grid item xs={12}>
              {store.getState().countryData[0] ? (
                <Papers Data={store.getState().countryData[0]} />
              ) : (
                "Loading"
              )}
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Overall Stats
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {store.getState().countryData[0] ? (
                <RegularGraph
                  Data={store.getState().countryData[0]}
                  type="confirmed"
                  label="Total Confirmed"
                  stroke="#FFAE00"
                />
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {store.getState().countryData[0] ? (
                <RegularGraph
                  Data={store.getState().countryData[0]}
                  type="deaths"
                  Stype={
                    sessionStorage.getItem("secondCountryDisplay") + "_deaths"
                  }
                  label="Total Deaths"
                  stroke="#FF0000"
                />
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {store.getState().countryData[0] ? (
                <RegularGraph
                  Data={store.getState().countryData[0]}
                  type="recovered"
                  Stype={
                    sessionStorage.getItem("secondCountryDisplay") +
                    "_recovered"
                  }
                  label="Total Recovered"
                  stroke="#00FF2A "
                />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Daily Stats
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {store.getState().countryData[0] ? (
                <RegularGraph
                  Data={store.getState().countryData[0]}
                  type="confirmed"
                  Stype={
                    sessionStorage.getItem("secondCountryDisplay") +
                    "_confirmed"
                  }
                  daily={true}
                  label="Daily Confirmed"
                  stroke="#FFAE00"
                />
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {store.getState().countryData[0] ? (
                <RegularGraph
                  Data={store.getState().countryData[0]}
                  type="deaths"
                  Stype={
                    sessionStorage.getItem("secondCountryDisplay") + "_deaths"
                  }
                  daily={true}
                  label="Daily Deaths"
                  stroke="#FF0000"
                />
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {store.getState().countryData[0] ? (
                <RegularGraph
                  Data={store.getState().countryData[0]}
                  type="recovered"
                  Stype={
                    sessionStorage.getItem("secondCountryDisplay") +
                    "_recovered"
                  }
                  daily={true}
                  label="Daily Recovered"
                  stroke="#00FF2A "
                />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </NavBar>
      </Provider>
    </React.Fragment>
  );
};

export default Application;
