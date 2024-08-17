import React from "react";
import { Highlights } from "./Highlights";
import { Link } from "react-router-dom";
export const CatCard = (props) => {
  const temper = props.temper.split(",");

  return (
    <section className="bg-white drop-shadow-md max-h-[75vh] rounded-lg overflow-y-scroll scroll">
      <img src={props.image} className="w-inherit rounded-t-lg image"></img>
      <div id="container" className="m-3">
        <p className="text-2xl font-semibold">{props.title}</p>
        <p className="my-2 break-words">{props.detail}</p>
        <div className="flex flex-row flex-start  text-sm my-2">
          <i>
            <p className="  font-semibold">Origin</p>
          </i>

          <p className="mx-10">{props.origin}</p>
        </div>
        <div className="text-sm ">
          <i>
            <p className="font-semibold ">Temperament</p>
          </i>
          <div className="flex justify-start flex-wrap items-center">
            {temper.map((item) => {
              return (
                <>
                  <Highlights data={item} />
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row items-center text-sm">
          <i>
            <p className="  font-semibold">Life Span</p>
          </i>
          <p className="mx-5">{props.lifespan} years</p>
        </div>
        <Link to={props.link}>
          <p className=" text-blue-400 my-4">Learn More</p>
        </Link>
      </div>
    </section>
  );
};
