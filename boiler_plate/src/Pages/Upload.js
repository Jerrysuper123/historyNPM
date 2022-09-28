import React from "react";
import history from "../history.js";
import { useNavigate } from "react-router-dom";

//v5 of using history
// const handleClick = (e) => {
//   history.push("/");
// };

function Upload() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/");
  };
  return (
    <>
      <div>Upload</div>
      <button onClick={(e) => handleClick(e)}>go to start</button>
    </>
  );
}

export default Upload;
