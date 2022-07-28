import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3} lg={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} lg={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} lg={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
