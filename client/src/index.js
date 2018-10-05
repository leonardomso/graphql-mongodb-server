import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

injectGlobal`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0; }
  
  html {
    height: 100%;
    font-size: 16px;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar; }
  
  *::-moz-selection, *::-moz-selection {
    color: white;
    background-color: #4D61FC; }
  
  *::-moz-selection, *::selection {
    color: white;
    background-color: #4D61FC; }
  
  body {
    background-color: white;
    font-family: "Lato", Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #3d3d3d; }
    body.state-fixed-body {
      overflow: hidden; }
  
  p {
    margin-bottom: 1em;
    margin-top: 1em;
    font-family: "Lora", serif;
    line-height: 1.4; }
  
  [tabindex="-1"]:focus {
    outline: 0 !important; }
  
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible; }
  
  strong, b {
    font-weight: 700; }
  
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit; }
  
  button,
  input {
    border: none;
    background: none;
    overflow: visible; }
  
  button {
    border-radius: 0; }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    line-height: 1.3;
    color: #303030; }
  
  button:focus,
  input:focus,
  textarea:focus {
    outline: none; }
`;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
