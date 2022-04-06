import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";
import Bookmark from "./Bookmark";
import RecipeDetail from "./RecipeDetail";

function DataAPI() {
  const [recipeData, setRecipeData] = useState();

  const API_URL = "https://forkify-api.herokuapp.com/api/get?rId=";

  return (
    <Routes>
      <Route path="bookmark" element={<Bookmark />} />
      <Route
        path="search/:id/id=:id"
        element={<RecipeDetail setRecipeData={setRecipeData} recipeData={recipeData}/>}
      />
    </Routes>
  );
} 

export default DataAPI;
