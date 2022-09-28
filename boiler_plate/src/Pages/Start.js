import React from "react";
import history from "../history.js";
import { useNavigate } from "react-router-dom";

//v5 of doing
// const handleClick = (e) => {
//   history.push("/");
// };

function Start() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/upload");
  };
  return (
    <>
      <div>Start</div>
      <button onClick={(e) => handleClick(e)}>go to upload</button>
    </>
  );
}

export default Start;
