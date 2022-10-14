import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../fetchFromAPI";
import LeftNav from "./Navbars/LeftNav";
import NavbarMainTop from "./Navbars/NavbarMainTop";
import "./SearchResults.css";
import Videos from "./Videos";

export default function SearchResults() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <div>
      <NavbarMainTop></NavbarMainTop>
      {/* <LeftNav></LeftNav> */}
      <div className="searchResults">
        <h2>
          Search Results For: <span>"{searchTerm}"</span> videos
        </h2>
        <Videos videos={videos}></Videos>
      </div>
    </div>
  );
}
