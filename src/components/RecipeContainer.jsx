import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { SiCodechef } from "react-icons/si";
import {FaLongArrowAltRight} from "react-icons/fa"
import {FaLongArrowAltLeft} from "react-icons/fa"
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
  const ref = useRef()
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  // console.log()
//  scrollLeft.current.onclick = function () {
//     document.getElementById('container').scrollLeft += 20;
//   };
  useEffect(() => {
    setState("inactive");
    fetch(`${API_URL}${dishName}`)
      .then((res) => res.json())
      .then((data) => setRecipeData(data.recipes));
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
    // setRecipeData("");
    if (data !== "" && state === "active") {
      return (
        <div className="card-wrap">
          <div className="card-container" ref={ref}>
            {data.map((el) => {
              return (
                <div key={uuidv4()} className="card">
                  <img
                    src={el.image_url}
                    alt={`img of ${el.title}`}
                    className="card-img"
                  />
                  <div className="card-content">
                    <p className="cook-name">
                      <SiCodechef />
                      {el.publisher}
                    </p>
                    <p className="dish-name">{el.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="scroll-btn-container">
            <button onClick={() => scroll(-1000)} className="scroll-btn"><FaLongArrowAltLeft/></button>
            <button  onClick={() => scroll(+1000)} className="scroll-btn"><FaLongArrowAltRight/></button>
          </div>
        </div>
      );
    } else {
      return <h1> NOT WORKING</h1>;
    }
  };

  return displayUI(recipeData);
}
