import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Bookmark({ bookmarks }) {
  const displayBookmarks = (data) => {
    if (data.length > 0) {
      return (
        <div className="bookmark-container">
          {data.map((element) => {
            return (
              <div key={uuidv4()} className="bookmark-card">
                <img src={element.image_url} alt="" className="bookmark-img" />
                <div className="bookmark-content">
                  <h1 className="bookmark-recipeName ">{element.title}</h1>
                  <p className="bookmark-publisher">{element.publisher}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h1 className="bookmark-title">NO BOOKMARK ADDED</h1>;
    }
  };
  displayBookmarks(bookmarks);
  return displayBookmarks(bookmarks);
}
