import React from "react";
import { useNavigate } from "react-router-dom";
export const Button = (props) => {
  const navigate = useNavigate();
  console.log(props.path);
  return (
    <button
      onClick={() => {
        navigate(props.path);
      }}
      className=" p-2 bg-orange-500 rounded-lg text-white mx-2 hover:bg-orange-400"
    >
      {props.text}
    </button>
  );
};
