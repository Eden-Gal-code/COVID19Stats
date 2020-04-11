import React from "react";
import MyPaper from "./Paper";
import Grid from "@material-ui/core/Grid";

const Papers = React.memo(function Papers(props) {
  const data = props.Data[props.Data.length - 1];

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
});
export default Papers;
