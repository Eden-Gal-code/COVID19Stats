import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
}));

const CountrySelect = React.memo((props) => {
  const classes = useStyles();
  const [country, setCountry] = useState(sessionStorage.getItem(props.item));

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={country}
        onChange={(event) => {
          setCountry(event.target.value);
          sessionStorage.setItem(props.item, event.target.value);
          if (props.reload) {
            window.location.reload();
          }
        }}
        label="Country"
      >
        <MenuItem value="">
          <em>Global</em>
        </MenuItem>
        {props.list.list.map((country1) => {
          return <MenuItem value={country1}>{country1}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
});
export default CountrySelect;
