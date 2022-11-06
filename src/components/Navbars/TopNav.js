import React from "react";
import "./TopNav.css";
import { top } from "./LeftNavElement";

export default function TopNav({
  selectedCategory,
  setSelectedCategory,
  videos,
  setVideos,
}) {
  return (
    <div className="topNav">
      {top.map((type) => (
        <ul key={type.title}>
          <li
            style={{
              background:
                type.title === selectedCategory && "rgb(255, 255, 255)",
              color: type.title === selectedCategory && "rgb(32, 32, 32)",
            }}
            // key={type.title}
            onClick={() => setSelectedCategory(type.title)}
          >
            <span>{type.title}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}
