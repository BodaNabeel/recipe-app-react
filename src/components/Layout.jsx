import React from "react";
import { NavLink } from "react-router-dom";
import {BiSearchAlt} from "react-icons/bi"
import {BsBookmarkFill} from "react-icons/bs"
function Layout({ children }) {
    const setClassName = (state) => {
       return state ? "categories-content_btn__active categories-content_btn__structure" : "categories-content_btn__structure categories-content_btn"
    }
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
                <NavLink className={({isActive}) => setClassName(isActive)} to="/test">
                  Snacks
                </NavLink>
                <NavLink className={({isActive}) => setClassName(isActive)} to="/test">
                  Junk
                </NavLink>
                <NavLink className={({isActive}) => setClassName(isActive)} to="/">
                  Non-Veg
                </NavLink>
                <NavLink className={({isActive}) => setClassName(isActive)} to="/test">
                  Pizza
                </NavLink>
                <NavLink className={({isActive}) => setClassName(isActive)} to="/test">
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

          <div className="content-bar">
              <div className="search-bar">
                  <BiSearchAlt className="search-bar_icon"/>
                  <input type="text" placeholder="enter dish....." className="search-bar_inputField"/>
              </div>
              <div className="bookmark-bar">
                  <span className="bookmark-bar_text">Bookmarks</span>
              <BsBookmarkFill/>
              </div>
          </div>
          {children}
          </div>
      </div>
      {/* {children} */}
    </>
  );
}

export default Layout;
