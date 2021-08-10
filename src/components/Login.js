import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperLeft: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "15% 10% 0% 10%",
    // marginLeft: "10% ",
    // marginTop: "15% ",
  },
  paperRight: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "15% 10% 0% 10%",
    // marginTop: "15% ",
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperLeft}>
            <img src="/images/connect_logo.gif" alt="connect logo" />
            <h1>Welcome!</h1>
            <p>
              to the new world of social media! where you can control everything
              to want! Nobody can follow or collect your personal data! Check
              out how it works?
            </p>
            <p>Privacy Policy</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paperRight}>
            <h1>Login</h1>
            <p>Username</p>
            <input></input>
            <p>Password</p>
            <input></input>
            <p>Forgot password?</p>
            <div>
              <Button variant="contained" color="primary">
                Enter
              </Button>
            </div>
            <p>New User? Sign up</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
