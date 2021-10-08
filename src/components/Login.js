import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
const axios = require("axios");
// import { useDispatch } from "react-redux";

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
  //  const dispatch = useDispatch()
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const classes = useStyles();
  const buttonHandler = (e) => {
    axios
      .post("https://social-neto.herokuapp.com/auth/login", {
        email: cred.email,
        password: cred.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
                    onChange={(e) =>
                      setCred({ ...cred, email: e.target.value })
                    }
                    required={true}
                    name="email"
                    autoFocus={true}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className={classes.username}
                  />
                  <TextField
                    onChange={(e) =>
                      setCred({ ...cred, password: e.target.value })
                    }
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
                  New to Connect? <Link to="/signup">Sign Up</Link>
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
