import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function RecipeContainer() {
  //   API URL: https://forkify-api.herokuapp.com/api/v2/recipes/
  // search by name: AJAX(`${API_URL}?search=${query}&key=${KEY}`);
  // search by ID: AJAX(`${API_URL}${id}?key=${KEY}`);
  // key: 36cdcc1e-f278-45a8-a77a-6af5bd74bf2e
  // id: 5ed6604591c37cdc054bcd09
  // sample  https://forkify-api.herokuapp.com/api/v2/recipes/search=pizza&key=36cdcc1e-f278-45a8-a77a-6af5bd74bf2e
  const params = useParams();
  const dishName = params.id;
  const API_URL = "https://forkify-api.herokuapp.com/api/search?q=";
  const [recipeData, setRecipeData] = useState("");
  const [state, setState] = useState("inactive");

  // fetching API when dishName is changed
  useEffect(() => {
    setRecipeData("");
    setState("inactive");
    fetch(`${API_URL}${dishName}`)
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
  }, [dishName]);

  // setting a timer to show a loading animation for 5secs
  useEffect(() => {
    const timer = setTimeout(() => {
      return setState("active");
    }, 3000);
    return () => clearTimeout(timer);
  }, [recipeData]);

  // function used to create the data template
  const displayUI = (data) => {
    if (data !== "" && state === "active") {
      return <h1> Working...!</h1>;
    } else {
      return <h1> NOT WORKING</h1>;
    }
  };
  
  return <div>{displayUI(recipeData)}</div>;
}

