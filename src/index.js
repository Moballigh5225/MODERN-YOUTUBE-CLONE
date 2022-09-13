import React from "react";
//in version 18 react-dom is changed to client
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//new react 18 update changes syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
