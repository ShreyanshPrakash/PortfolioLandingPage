import React from "react";
import avatarImg from "./assets/portrait.png";
import "./avatar.css";

export function Avatar() {
  return (
    <img
      src={avatarImg}
      className="project--avatar-img"
      alt={"User's Avatar"}
    />
  );
}
