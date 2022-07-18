import React from "../_snowpack/pkg/react.js";
import {createRoot} from "../_snowpack/pkg/react-dom/client.js";
import {App} from "./App.js";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(/* @__PURE__ */ React.createElement(App, null));
