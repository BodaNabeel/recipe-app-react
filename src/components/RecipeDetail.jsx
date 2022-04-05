import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GiChefToque } from "react-icons/gi";
import SyncLoader from "react-spinners/SyncLoader";
import { BsBookmarkFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

export default function RecipeDetail() {
  const location = useLocation();
  const id = location.state;
  const API_URL = "https://forkify-api.herokuapp.com/api/get?rId=";

  const [detailedRecipe, setDetailedRecipe] = useState("");
  const [isActive, setIsActive] = useState(false);

  // toggling isActive
  const toggleClass = () => {
    setIsActive(!isActive);
  };

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
        <div className="detail-top">
          <BsBookmarkFill
            onClick={toggleClass}
            className={
              isActive
                ? "bookmark-icon bookmark-icon_active"
                : "bookmark-icon bookmark-icon_passive"
            }
          />
          <img
            src={data.image_url}
            alt={`img of ${data.title}`}
            className="detail-container__img"
          />
        </div>
        <div className="detail-container__content">
          <div className="content-top">
            <div className="cook-detail">
              <span className="cook-icon">
                <GiChefToque />
              </span>
              <p className="cook-name">{data.publisher}</p>
            </div>
            <div className="dish-info">
              <div className="recipe-id dish-info__container">
                <p className="recipe-id__text">Recipe Id:</p>
                <p className="recipe-id__text">{data.recipe_id}</p>
              </div>
              <div className="recipe-rank dish-info__container">
                <p className="recipe-rank__text">Recipe Rank:</p>
                <p className="recipe-rank__text">
                  {Math.round(data.social_rank)}
                </p>
              </div>
            </div>
          </div>

          <h1 className="recipe-name">{data.title}</h1>

          <div className="recipe-ingredients">
            <p className="recipe-ingredients__heading">Recipe Ingredients:</p>
            <div className="ingredient-list">
              {data.ingredients.map((el, index) => {
                return (
                  <p key={uuidv4()} className="ingredient">{`${
                    index + 1
                  }) ${el}`}</p>
                );
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
