import React from "react";
import "./BottomNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

export default function BottomNav() {
  return (
    <div className="bottomNav">
      <div className="bottomNavIcon">
        <HomeIcon sx={{ fontSize: 23, color: "red" }}></HomeIcon>
        <span>Home</span>
      </div>

      <div className="bottomNavIcon">
        <LibraryMusicOutlinedIcon
          sx={{ fontSize: 23 }}
        ></LibraryMusicOutlinedIcon>
        <span>Shorts</span>
      </div>

      <div className="bottomNavIcon">
        <AddCircleOutlineOutlinedIcon
          sx={{ fontSize: 35 }}
        ></AddCircleOutlineOutlinedIcon>
      </div>

      <div className="bottomNavIcon">
        <SubscriptionsOutlinedIcon
          sx={{ fontSize: 23 }}
        ></SubscriptionsOutlinedIcon>
        <span>Subscription</span>
      </div>

      <div className="bottomNavIcon">
        <VideoLibraryOutlinedIcon
          sx={{ fontSize: 23 }}
        ></VideoLibraryOutlinedIcon>
        <span>Library</span>
      </div>
    </div>
  );
}
