import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MyPaper from "./Paper";
import Grid from "@material-ui/core/Grid";
import { ReactReduxContext } from "react-redux";
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
  table: {
    minWidth: 200,
  },
}));

const MultiDataPaper = React.memo((props) => {
  let temp = [];
  props.data.map((arr) => {
    temp.push(arr[arr.length - 1]);
  });
  const [data, setData] = useState(temp);
  const [countries, setCountries] = useState([props.country]);
  const classes = useStyles();
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        store.subscribe(() => {
          setCountries(store.getState().countries);
          console.log(data);
          let temp = [];
          store.getState().countryData.map((data) => {
            temp.push(data[data.length - 1]);
          });
          setData(temp);
          console.log(data);
          console.log(store.getState().countryData);
        });

        return (
          <React.Fragment>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        component="h3"
                        variant="h7"
                        color="primary"
                        gutterBottom
                      >
                        Countries
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <Typography
                        component="h3"
                        variant="h7"
                        color="primary"
                        gutterBottom
                      >
                        Confirmed
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <Typography
                        component="h3"
                        variant="h7"
                        color="primary"
                        gutterBottom
                      >
                        Deaths
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <Typography
                        component="h3"
                        variant="h7"
                        color="primary"
                        gutterBottom
                      >
                        Recovered
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((obj, index) => (
                    <TableRow key={countries[index]}>
                      <TableCell component="th" scope="row">
                        <Typography
                          component="h3"
                          variant="h7"
                          color="primary"
                          gutterBottom
                        >
                          {countries[index]}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography component="h3" variant="h7" gutterBottom>
                          {obj.confirmed.toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography component="h3" variant="h7" gutterBottom>
                          {obj.deaths.toLocaleString()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography component="h3" variant="h7" gutterBottom>
                          {obj.recovered.toLocaleString()}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </React.Fragment>
        );
      }}
    </ReactReduxContext.Consumer>
  );
});
export default MultiDataPaper;
