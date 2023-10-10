import React from "react";
import { createRoot } from "react-dom/client";

// 1- render useState
import UseState from "./React-Render-Tutorial/UseState";

// 2- render useReducer
import UseReducer from "./React-Render-Tutorial/UseReducer";

// 3- Parent & Child
import Parent from "./React-Render-Tutorial/Parent+Child/Parent";

// import Memoization from "./Memoization/Parent";
// import Test from "./PureComponentExample";
// import RenderPropsPattern from "./components/RenderPropsPattern";
// import Test from "./components/Test";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// render
root.render(<Parent />);
