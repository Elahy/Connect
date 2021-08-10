import React, { useState } from "react";
import "./index.css";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  const [logged, setLogged] = useState(false);
  return <>{logged ? <Homepage /> : <Login log={setLogged} />}</>;
}

export default App;
