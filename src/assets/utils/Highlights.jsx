import React from "react";

export const Highlights = (props) => {
  return (
    <div className="text-xm rounded-lg text-black bg-gray-200 font-sans px-2 m-2 hover:bg-[#D482DB] hover:text-white hover:cursor-pointer">
      {props.data}
    </div>
  );
};
