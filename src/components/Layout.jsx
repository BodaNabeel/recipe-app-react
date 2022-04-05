import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
function Layout({ children }) {
  let navigate = useNavigate();
  const inputField = useRef();
  const setClassName = (state) => {
    return state
      ? "categories-content_btn__active categories-content_btn__structure"
      : "categories-content_btn__structure categories-content_btn";
  };

  useEffect(() => {
    inputField.current.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        navigate(`search/${inputField.current.value}`);
        inputField.current.value = "";
        inputField.current.blur()
      }
    });
  }, []);

  return (
    <>
      <div className="layout">
        <div className="sidebar">
          <div className="branding">
            <p className="branding-name">Fork it!</p>
            <p className="branding-info">Recipes at one place</p>
          </div>
          <div className="categories">
            <p className="categories-title">Variety of Recipe</p>
            <div className="categories-content">
              <NavLink
                className={({ isActive }) => setClassName(isActive)}
                to="/test"
              >
                Snacks
              </NavLink>
              <NavLink
                className={({ isActive }) => setClassName(isActive)}
                to="/test"
              >
                Junk
              </NavLink>
              <NavLink
                className={({ isActive }) => setClassName(isActive)}
                to="/"
              >
                Non-Veg
              </NavLink>
              <NavLink
                className={({ isActive }) => setClassName(isActive)}
                to="/test"
              >
                Pizza
              </NavLink>
              <NavLink
                className={({ isActive }) => setClassName(isActive)}
                to="/test"
              >
                Burger
              </NavLink>
            </div>
          </div>
          <div className="footer">
            <p className="footer-design">
              Designed by:
              <a
                target="_blank"
                href="https://twitter.com/kaarthikhere"
                rel="noreferrer"
                className="footer-link"
              >
                Kaarthik
              </a>
            </p>
            <p className="footer-design">
              Coded by:
              <a
                target="_blank"
                href="https://twitter.com/bodanabeel"
                rel="noreferrer"
                className="footer-link"
              >
                Nabeel Boda
              </a>
            </p>
          </div>
        </div>
        <div className="content">
         
            <div className="search-bar">
              <BiSearchAlt className="search-bar_icon" />
              {/* /search/id */}
              <input
                ref={inputField}
                type="text"
                placeholder="enter dish....."
                className="search-bar_inputField"
              />
            </div>
            <div className="bookmark-bar">
              <span className="bookmark-bar_text">Bookmarks</span>
              <BsBookmarkFill />
            </div>
          </div>
        
          <div className="content-main">{children}</div>
      </div>
      {/* {children} */}
    </>
  );
}

export default Layout;
