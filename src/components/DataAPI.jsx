import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";
import Bookmark from "./Bookmark";
import RecipeDetail from "./RecipeDetail";

function DataAPI() {
  const [recipeData, setRecipeData] = useState([]);


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
