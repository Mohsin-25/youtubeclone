import React from "react";
import "./LeftNav.css";
import { typeTop } from "./LeftNavElement";
import { typeBottom } from "./LeftNavElement";


export default function LeftNav({
  selectedCategory,
  setSelectedCategory,
  videos,
  setVideos,
}) {
  // console.log("LeftNav " + selectedCategory);

  return (
    <div className="leftNav">
      {typeTop.map((type) => (
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
      {/* <button className="signIN">
        <AccountCircleOutlinedIcon
          className="profileIcon"
          sx={{ fontSize: 28, color: "blue()" }}
        ></AccountCircleOutlinedIcon>
        <span>SIGN IN</span>
      </button> */}
      {typeBottom.map((type) => (
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
      {/* <button className="elements">
          <span className="elementIcon">{type.icon}</span>
          <span className="elementTitle">{type.title}</span>
        </button> */}
    </div>
  );
}
