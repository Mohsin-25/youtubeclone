import React, { useState } from "react";
import "./Main.css";
import LeftNav from "./Navbars/LeftNav";
import Feed from "./Feed";

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const [videos, setVideos] = useState([]);
  // console.log("Main " + selectedCategory);

  return (
    <div className="main">
      <div className="divider">
        <LeftNav
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          videos={videos}
          setVideos={setVideos}
        />
        <Feed
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          videos={videos}
          setVideos={setVideos}
        />
      </div>
    </div>
  );
}
