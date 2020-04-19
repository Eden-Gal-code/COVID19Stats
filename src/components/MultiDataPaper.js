import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

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

const MyPaper = React.memo((props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper elevation={5} className={classes.paper}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {props.title}
        </Typography>
        <Typography
          component="p"
          variant={window.innerWidth < 500 ? "h6" : "h4"}
        >
          {props.number.toLocaleString()}
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          {props.date}
        </Typography>
      </Paper>
    </React.Fragment>
  );
});
export default MyPaper;
