import React, { useEffect } from "react";
import { fetchFromAPI } from "../fetchFromAPI";
import Videos from "./Videos";
import "./Feed.css";

export default function Feed({
  selectedCategory,
  setSelectedCategory,
  videos,
  setVideos,
}) {
  //   console.log("Feed " + selectedCategory);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <div className="feed">
      <h2 style={{ margin: 10 }}>{selectedCategory} Videos</h2>
      <div className="videos">
        <Videos videos={videos}></Videos>
      </div>
    </div>
  );
}
