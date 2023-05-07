import React from "react";
import App from "./App";
import "./index.css";

import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  throw new Error("Root element not found");
}
