import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Bookmark from "./Bookmark";
import RecipeDetail from "./RecipeDetail";

function DataAPI() {
  const [recipeData, setRecipeData] = useState([]);


  return (
    <Routes>
      <Route path="bookmark" element={<Bookmark bookmarks={recipeData} />} />
      <Route
        path="search/:id/id=:id"
        element={<RecipeDetail setRecipeData={setRecipeData} recipeData={recipeData}/>}
      />
    </Routes>
  );
} 

export default DataAPI;
