import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { ReactReduxContext } from "react-redux";
import { createCompareData, DataPerDay } from "../API";
var colorArray = [
  "#FF6633",

  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    textAlign: "center",
    maxWidth: "200",
  },
}));
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => ++value); // update the state to force render
}

const RegularGraph = function RegularGraph(props) {
  const [data, setData] = useState(
    createCompareData(
      [],
      props.daily ? DataPerDay(props.Data) : props.Data,
      "Global"
    )
  );
  const [countries, setCountries] = useState(["Global"]);
  const forceUpdate = useForceUpdate();
  const classes = useStyles();
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        store.subscribe(() => {
          setCountries(store.getState().countries);

          let temp = [];
          if (store.getState().countries.length === 1) {
            if (Array.isArray(store.getState().countryData[0])) {
              let arr = store.getState().countryData;

              for (let i = 0; i < arr.length; i++) {
                temp = createCompareData(
                  temp,
                  props.daily ? DataPerDay(arr[i]) : arr[i],
                  store.getState().countries[i]
                );
              }
              setData(temp);
            } else {
              for (let i = 0; i < store.getState().countryData.length; i++) {
                store.getState().countryData[i].then((arr) => {
                  temp = createCompareData(
                    temp,
                    props.daily ? DataPerDay(arr) : arr,
                    store.getState().countries[i]
                  );

                  setData(temp);
                });
              }
            }
          } else {
            setData(
              props.daily
                ? store.getState().compareDataDay
                : store.getState().compareDataReg
            );
            forceUpdate();
          }
        });

        return (
          <Paper elevation={3} className={classes.paper}>
            <h2>{props.label}</h2>
            <ResponsiveContainer height={300} width="100%">
              <LineChart
                data={data}
                height={300}
                width={370}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"></XAxis>
                <YAxis hide={true} />
                <Tooltip />
                <Legend />

                {countries.map((country, index) => {
                  return (
                    <Line
                      type="monotone"
                      dataKey={country + "_" + props.type}
                      stroke={colorArray[index + 6]}
                      dot={false}
                      strokeWidth={3}
                      name={country}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        );
      }}
    </ReactReduxContext.Consumer>
  );
};
export default RegularGraph;
