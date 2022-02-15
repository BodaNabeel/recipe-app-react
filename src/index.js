import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import 'normalize.css';
import App from "./App";

ReactDOM.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="test" element={<App/>}/>
      </Routes>
    </Layout>
  </Router>,
  document.getElementById("root")
);
