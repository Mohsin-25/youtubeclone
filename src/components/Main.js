import React, { useState } from "react";
import "./Main.css";
import LeftNav from "./Navbars/LeftNav";
import Feed from "./Feed";
import TopNav from "./Navbars/TopNav";

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const [videos, setVideos] = useState([]);
  // console.log("Main " + selectedCategory);

  return (
    <div className="main">
      <div className="divider">
        {window.innerWidth >= 480 && (
          <LeftNav
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            videos={videos}
            setVideos={setVideos}
          />
        )}
        <div>
          <TopNav
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            videos={videos}
            setVideos={setVideos}
          ></TopNav>
          <Feed
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            videos={videos}
            setVideos={setVideos}
          />
        </div>
      </div>
    </div>
  );
}
