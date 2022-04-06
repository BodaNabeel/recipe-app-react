import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "normalize.css";
import RecipeContainer from "./components/RecipeContainer";
// import RecipeDetail from "./components/RecipeDetail";
// import Bookmark from "./components/Bookmark";
import DataAPI from "./components/DataAPI";

ReactDOM.render(
  <Router>
    <Layout>
      <DataAPI />
      <Routes>
        <Route path="search/:id" element={<RecipeContainer />} />
        {/* <Route path="search/:id/id=:id" element={<RecipeDetail />} />
        <Route path="/bookmark" element={<Bookmark/>} /> */}
      </Routes>
    </Layout>
  </Router>,
  document.getElementById("root")
);
