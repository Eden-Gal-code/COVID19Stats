import React from "react";
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
const RegularGraph = React.memo(function RegularGraph(props) {
  const data = props.Data;

  const classes = useStyles();
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
          <Line
            type="monotone"
            dataKey={props.type}
            stroke={props.stroke}
            dot={false}
            strokeWidth={3}
          />
          {data[0].hasOwnProperty(props.Stype) && (
            <Line
              type="monotone"
              dataKey={props.Stype}
              stroke="#581845"
              dot={false}
              strokeWidth={3}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
});
export default RegularGraph;
