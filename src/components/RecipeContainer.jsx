import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GiChefToque } from "react-icons/gi";
import SyncLoader from "react-spinners/SyncLoader";

export default function RecipeContainer() {
  const params = useParams();
  const dishName = params.id;
  const API_URL = "https://forkify-api.herokuapp.com/api/search?q=";
  const [recipeData, setRecipeData] = useState("");
  const [state, setState] = useState("inactive");
  const [scrollX, setScrollX] = useState(0);
  const [scrollWidthX, setScrollWidthX] = useState();

  const ref = useRef();
  const navigate = useNavigate();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setScrollWidthX(ref.current.scrollWidth - ref.current.offsetWidth);
    setScrollX(Math.ceil(ref.current.scrollLeft));
  };
  const scrollCheck = () => {
    setScrollWidthX(ref.current.scrollWidth - ref.current.offsetWidth);
    setScrollX(Math.ceil(ref.current.scrollLeft));
  };

  useEffect(() => {
    setState("inactive");
    fetch(`${API_URL}${dishName}`)
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
  }, [dishName]);

  // changing scroll value to default i.e 0 on every new search
  useEffect(() => {
    setScrollX(0);
  }, [dishName]);

  // setting a timer to show a loading animation for 5secs
  useEffect(() => {
    const timer = setInterval(() => {
      return setState("active");
    }, 3000);
    return () => clearTimeout(timer);
  }, [dishName]);

  // function used to create the data template
  const displayUI = (data) => {
    if (data.recipes && state === "active") {
      return (
        <div className="card-wrap">
          <p className="card-wrap-heading">select a dish</p>
          <div className="card-container" onScroll={scrollCheck} ref={ref}>
            {data.recipes.map((el) => {
              return (
                <div
                  key={uuidv4()}
                  onClick={() => {
                    navigate(`id=${el.recipe_id}`, { state: el.recipe_id });
                  }}
                  className="card"
                >
                  <img
                    src={el.image_url}
                    alt={`img of ${el.title}`}
                    className="card-img"
                  />
                  <div className="card-content">
                    <p className="cook-detail">
                      <span className="cook-icon">
                        <GiChefToque />
                      </span>
                      {el.publisher}
                    </p>
                    <p className="dish-name">{el.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="scroll-btn-container">
            {/* <button onClick={() => scroll(-1000)} className="scroll-btn"> */}
            <button
              disabled={scrollX <= 0 ? true : false}
              onClick={() => scroll(-1000)}
              className={
                scrollX === 0
                  ? "scroll-btn scroll-btn_passive"
                  : "scroll-btn scroll-btn_active"
              }
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              onClick={() => scroll(+1000)}
              disabled={scrollX >= scrollWidthX ? true : false}
              className={
                scrollX >= scrollWidthX
                  ? "scroll-btn scroll-btn_passive"
                  : "scroll-btn scroll-btn_active"
              }
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      );
    } else if (data.error && state === "active") {
      return (
        <div className="error-container">
          <p className="error-msg">{data.error}</p>
          <img
            src={process.env.PUBLIC_URL + "/img/error-img.png"}
            alt=""
            className="error-img"
          />
        </div>
      );
    } else {
      return (
        <div className="loader">
          <SyncLoader color="#48bf84" />
        </div>
      );
    }
  };

  return displayUI(recipeData);
}
