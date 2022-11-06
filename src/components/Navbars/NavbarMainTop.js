import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarMainTop.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function NavbarMainTop() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // const search = (e) => {
  //   setSearchTerm = e.target.value;
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  const handleKeyPress = (e) => {
    // e.preventDefault();
    if (e.key === "Enter") {
      if (searchTerm) {
        navigate(`/search/${searchTerm}`);
        setSearchTerm("");
      }
    }
  };

  const navSwitch = () => {
    // document.querySelectorAll("elements").classList.add("switch");
    const elements = document.querySelectorAll(".elements");
    elements.forEach((elm) => {
      elm.classList.toggle("switch");
    });
    const elementIcon = document.querySelectorAll(".elementIcon");
    elementIcon.forEach((margin) => {
      margin.classList.toggle("switchMargin");
    });
    const elementWidth = document.querySelectorAll(".leftNav");
    elementWidth.forEach((eWidth) => {
      eWidth.classList.toggle("switchWidth");
    });
    const elementTitle = document.querySelectorAll(".elementTitle");
    elementTitle.forEach((eWidth) => {
      eWidth.classList.toggle("switchFontSize");
    });
  };

  return (
    <div>
      <nav className="navTop">
        <div className="menudiv">
          <MenuIcon
            sx={{ fontSize: 32 }}
            className="menu"
            onClick={navSwitch}
          ></MenuIcon>
        </div>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="ytLogoDiv">
            <img src="../photos/ytlogocropped.jpg" alt="" className="ytLogo" />
          </div>
        </Link>
        <div className="navMid" onKeyDown={handleKeyPress}>
          <input
            type="search"
            className="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div className="searchIconDiv">
            <SearchIcon
              sx={{ fontSize: 25 }}
              className="searchIcon"
              onClick={handleSubmit}
            ></SearchIcon>
          </div>
        </div>
        <div className="navRight">
          <button className="signIN">
            <AccountCircleOutlinedIcon
              className="profileIcon"
              sx={{ fontSize: 28, color: "blue()" }}
            ></AccountCircleOutlinedIcon>
            <span>SIGN IN</span>
          </button>
        </div>
      </nav>
      <hr />
    </div>
  );
}
