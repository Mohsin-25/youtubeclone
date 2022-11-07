import React from "react";
import Main from "./Main";
import NavbarMainTop from "./Navbars/NavbarMainTop";
import TopNav from "./Navbars/TopNav";

export default function Home({
  selectedCategory,
  setSelectedCategory,
  videos,
  setVideos,
}) {
  return (
    <div>
      <NavbarMainTop></NavbarMainTop>
      {/* <TopNav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        videos={videos}
        setVideos={setVideos}
      ></TopNav> */}
      <Main></Main>
    </div>
  );
}
