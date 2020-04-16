import React from "react";
import {
  useCountryList,
  useData,
  DataPerDay,
  useCountry,
  createCompareData,
} from "../API";
import NavBar from "../components/NavBar";
import Papers from "../components/Papers";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RegularGraph from "../components/RegularGraph";
import Grid from "@material-ui/core/Grid";
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
const Application = React.memo(function Application() {
  const classes = useStyles();
  console.log("rendered");
  const CountryList = useCountryList();
  const Data = useData(sessionStorage.getItem("countryDisplay"));
  const secondCountryData = useCountry(
    sessionStorage.getItem("secondCountryDisplay")
  );
  let headline = "Global";
  if (sessionStorage.getItem("selection") === "Country Stats") {
    sessionStorage.removeItem("secondCountryDisplay");
    headline = sessionStorage.getItem("countryDisplay")
      ? sessionStorage.getItem("countryDisplay")
      : "Global";
  }
  if (sessionStorage.getItem("selection") === "Global Stats") {
    sessionStorage.removeItem("secondCountryDisplay");
    headline = "Global";
  }
  if (sessionStorage.getItem("selection") === null) {
    sessionStorage.removeItem("secondCountryDisplay");
    headline = "Global";
  }
  if (sessionStorage.getItem("selection") === "Country Compare") {
    headline =
      sessionStorage.getItem("countryDisplay") +
      " VS. " +
      sessionStorage.getItem("secondCountryDisplay");
  }

  return (
    <React.Fragment>
      <NavBar className={classes.appBar} list={CountryList}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              {headline}
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            {Data ? <Papers Data={Data} /> : "Loading"}
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
            {Data ? (
              <RegularGraph
                Data={createCompareData(Data, secondCountryData)}
                type="confirmed"
                Stype="confirmed1"
                label="Total Confirmed"
                stroke="#FFAE00"
              />
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {Data ? (
              <RegularGraph
                Data={createCompareData(Data, secondCountryData)}
                type="deaths"
                Stype="deaths1"
                label="Total Deaths"
                stroke="#FF0000"
              />
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {Data ? (
              <RegularGraph
                Data={createCompareData(Data, secondCountryData)}
                type="recovered"
                Stype="recovered1"
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
            {Data ? (
              <RegularGraph
                Data={createCompareData(
                  DataPerDay(Data),
                  DataPerDay(secondCountryData)
                )}
                type="confirmed"
                Stype="confirmed1"
                label="Daily Confirmed"
                stroke="#FFAE00"
              />
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {Data ? (
              <RegularGraph
                Data={createCompareData(
                  DataPerDay(Data),
                  DataPerDay(secondCountryData)
                )}
                type="deaths"
                Stype="deaths1"
                label="Daily Deaths"
                stroke="#FF0000"
              />
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {Data ? (
              <RegularGraph
                Data={createCompareData(
                  DataPerDay(Data),
                  DataPerDay(secondCountryData)
                )}
                type="recovered"
                Stype="recovered1"
                label="Daily Recovered"
                stroke="#00FF2A "
              />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </NavBar>
    </React.Fragment>
  );
});

export default Application;
