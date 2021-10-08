import React, { useState } from "react";
import "./index.css";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import ForgetPass from "./components/ForgetPass";

function App() {
  const [logged, setLogged] = useState(false);
  console.log(logged, "===log from app");
  return (
    <>
      {!logged ? (
        <Login log={logged} setlog={setLogged} />
      ) : (
        <>
          <header>Hello</header>
          <main>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/login">
                <Login log={setLogged} />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/recover">
                <ForgetPass />
              </Route>
            </Switch>
          </main>
        </>
      )}
    </>
  );
}

export default App;
