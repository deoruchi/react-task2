import React from "react";

export const IconText = (props) => {
  return (
    <div className="flex flex-row items-center">
      <img src={props.icon} className="w-4 h-4" />
      <span className="mx-1">{props.data}</span>
    </div>
  );
};
