import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Bookmark from "./Bookmark";
import RecipeDetail from "./RecipeDetail";

function DataAPI() {
  const [recipeData, setRecipeData] = useState([]);
  const [bookmarkIDs, setBookmarkIDs] = useState([])

  return (
    <Routes>
      <Route path="bookmark" element={<Bookmark bookmarks={recipeData} />} />
      <Route
        path="search/:id/id=:id"
        element={<RecipeDetail bookmarkIDs={bookmarkIDs} setBookmarkIDs={setBookmarkIDs} setRecipeData={setRecipeData} recipeData={recipeData}/>}
      />
    </Routes>
  );
} 

export default DataAPI;
