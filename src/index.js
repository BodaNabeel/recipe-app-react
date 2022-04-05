import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import 'normalize.css';
import RecipeContainer from "./components/RecipeContainer"
import RecipeDetail from "./components/RecipeDetail";


ReactDOM.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="search/:id" element={<RecipeContainer/>}/>
        <Route path="search/:id/id=:id" element={<RecipeDetail/>}/>
      </Routes>
    </Layout>
  </Router>,
  document.getElementById("root")
);
