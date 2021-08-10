import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import data from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "15% 10% 0% 10%",
  },
  username: {
    margin: theme.spacing(1),
  },
  password: {
    margin: theme.spacing(1),
  },
}));

function Login(props) {
  const history = useHistory();
  console.log(props, "===props");
  const users = data.users;
  const [log, setLog] = useState({
    username: "",
    password: "",
  });
  const updateField = (e) => {
    setLog({
      ...log,
      [e.target.name]: e.target.value,
    });
  };
  const classes = useStyles();
  const buttonHandler = (e) => {
    users.every((user) => {
      console.log(user.name, log.username, "===username");
      console.log(user.password, log.password, "===userPassword");
      if (user.name === log.username && user.password === log.password) {
        props.setlog(true);
        history.push("/");
        return false;
      }
    });
    // alert("Wrong Username or Password!");
    e.preventDefault();
  };
  return (
    <>
      {props.log ? (
        <h1>Already Logged In</h1>
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img src="/images/connect_logo.gif" alt="connect logo" />
                <h1>Welcome!</h1>
                <p>
                  to the new world of social media! where you can control
                  everything to want! Nobody can follow or collect your personal
                  data! Check out how it works?
                </p>
                <p>Privacy Policy</p>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h1>Login</h1>
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField
                    value={log.username}
                    onChange={updateField}
                    required={true}
                    name="username"
                    autoFocus={true}
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    className={classes.username}
                  />
                  <TextField
                    value={log.password}
                    onChange={updateField}
                    required={true}
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    className={classes.password}
                  />
                  <p>
                    <Link to="/recover">Forgot password?</Link>
                  </p>
                  <Button
                    onClick={buttonHandler}
                    variant="contained"
                    color="primary"
                  >
                    Enter
                  </Button>
                </form>
                <p>
                  New to Connect? <Link to="/signup">Sign Up</Link>{" "}
                </p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default Login;
