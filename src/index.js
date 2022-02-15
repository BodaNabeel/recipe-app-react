import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import 'normalize.css';
import App from "./App";
import RecipeContainer from "./components/RecipeContainer"


ReactDOM.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="test" element={<App/>}/>
        <Route path="/search/:id" element={<RecipeContainer/>}/>
      </Routes>
    </Layout>
  </Router>,
  document.getElementById("root")
);
