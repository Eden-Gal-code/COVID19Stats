import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { ReactReduxContext } from "react-redux";

function Headline(props) {
  const [headline, setHeadline] = useState("Global");
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      <ReactReduxContext.Consumer>
        {({ store }) => {
          store.subscribe(() => {
            setHeadline(
              store.getState().countries[1]
                ? store.getState().choice
                : store.getState().countries[0]
            );
          });
        }}
      </ReactReduxContext.Consumer>
      {headline}
    </Typography>
  );
}
export default Headline;
