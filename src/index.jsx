import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// instead of polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDom.render(<App />, document.getElementById("root"));
