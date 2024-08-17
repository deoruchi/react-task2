import React, { useEffect, useState } from "react";
import axios from "axios";
import Chai from "../assets/icons/Chai.png";
import { Link } from "react-router-dom";
import { CatCard } from "../assets/utils/CatCard";
export const Cats = () => {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(false);
  const fetchCats = async () => {
    let pagenum = Math.floor(Math.random() * 10);
    const res = await axios.get(
      `https://api.freeapi.app/api/v1/public/cats?page=${pagenum}&limit=4`
    );
    console.log(res.data.data.data);
    setList(res.data.data.data);
  };
  useEffect(() => {
    fetchCats();
  }, []);
  if (list === false) {
    return <>No data found!!</>;
  }
  if (load === false) {
    return (
      <article id="bg-3" className="relative ">
        <div className="sticky">
          <p className=" text-3xl font-semibold  text-black">Cats Around Us</p>
          <button
            onClick={() => fetchCats()}
            className="p-2 bg-lime-500 text-white font-semibold rounded-md "
          >
            Refresh
          </button>
          <Link to="http://chaicode.com">
            <img
              src={Chai}
              className=" absolute w-16 top-5 right-6 rounded-lg"
            />
          </Link>
        </div>

        <br></br>
        <section className="columns ">
          {list.map((item) => {
            return (
              <CatCard
                key={item.id}
                image={item.image}
                title={item.name}
                detail={item.description}
                origin={item.origin}
                temper={item.temperament}
                lifespan={item.life_span}
                link={item.wikipedia_url}
              />
            );
          })}
        </section>
      </article>
    );
  }
};
