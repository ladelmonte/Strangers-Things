import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRouter from "react-router-dom";
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('App'))
root.render(<Router> <App /> </Router>)