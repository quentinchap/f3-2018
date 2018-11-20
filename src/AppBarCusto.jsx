import React from "react";
import { Link } from "react-router-dom";

import { withStyles, Typography, Toolbar, AppBar, Button } from "@material-ui/core";
import theme from "./theme";

const AppBarCusto = props => {
  const { classes, title } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Programmation Web - {title}
        </Typography>
        <Button color="inherit">
          <Link to="/">Home</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(theme.matUI)(AppBarCusto);
