import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GiChefToque } from "react-icons/gi";
import SyncLoader from "react-spinners/SyncLoader";

export default function RecipeDetail() {
  const location = useLocation();
  const id = location.state;
  const API_URL = "https://forkify-api.herokuapp.com/api/get?rId=";

  const [detailedRecipe, setDetailedRecipe] = useState("");

  // fetching API w.r.t ID
  useEffect(() => {
    fetch(`${API_URL}${id}`)
      .then((res) => res.json())
      .then((data) => setDetailedRecipe(data.recipe));
    //   .then((data) => console.log(data.recipe.image_url));
  }, [id]);

  // displaying detailed recipe function
  const displayUI = (data) => {
    return (
      <div className="detail-container">
        <img
          src={data.image_url}
          alt={`img of ${data.title}`}
          className="detail-container__img"
        />
        <div className="detail-container__content">
          <div className="content-top">
            <div className="cook-detail">
              <span className="cook-icon">
                <GiChefToque />
              </span>
              <p className="cook-name">{data.publisher}</p>
            </div>
            <div className="dish-info">
              <div className="recipe-id">
                <p className="recipe-id__text">Recipe Id</p>
                <p className="recipe-id__text">{data.recipe_id}</p>
              </div>
              <div className="recipe-rank">
                <p className="recipe-rank__text">Recipe Rank</p>
                <p className="recipe-rank__text">{data.social_rank}</p>
              </div>
            </div>
          </div>

          <h1 className="recipe-name">{data.title}</h1>

          <div className="recipe-ingredients">
            <p className="recipe-ingredients__heading">Recipe Ingredients</p>
            <div className="ingredient-list">
              {data.ingredients.map((el) => {
               return <p className="ingredient">{el}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return detailedRecipe !== "" ? (
    displayUI(detailedRecipe)
  ) : (
    <div className="loader">
      <SyncLoader color="#48bf84" />
    </div>
  );
}
