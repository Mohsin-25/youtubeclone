import React, { useState } from "react";
import "./LeftNavPop.css";
import { leftTop } from "./LeftNavElement";
import { leftBottom } from "./LeftNavElement";

export default function LeftNavPop({
  selectedCategory,
  setSelectedCategory,
  videos,
  setVideos,
}) {
//   const [showPopNav, setShowPopNav] = useState(false);
  return (
    // {
    // showPopNav &&
    <div className="leftNavPop">
      {leftTop.map((type) => (
        <ul key={type.title}>
          <li
            className="elements"
            style={{
              background: type.title === selectedCategory && "rgb(56, 56, 56)",
            }}
            // key={type.title}
            onClick={() => setSelectedCategory(type.title)}
          >
            <span
              className="elementIcon"
              style={{
                color: type.title === selectedCategory ? "red" : "white",
              }}
            >
              {type.icon}
            </span>
            <span className="elementTitle">{type.title}</span>
          </li>
        </ul>
      ))}
      {leftBottom.map((type) => (
        <ul key={type.title}>
          <li
            className="elements"
            style={{
              background: type.title === selectedCategory && "rgb(56, 56, 56)",
            }}
            // key={type.title}
            onClick={() => setSelectedCategory(type.title)}
          >
            <span
              className="elementIcon"
              style={{
                color: type.title === selectedCategory ? "red" : "white",
              }}
            >
              {type.icon}
            </span>
            <span className="elementTitle">{type.title}</span>
          </li>
        </ul>
      ))}
    </div>
    // }
  );
}
