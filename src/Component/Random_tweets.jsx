import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconText } from "../assets/utils/IconText";
import Chai from "../assets/icons/Chai.png";
import BackArrowW from "../assets/icons/BackArrowW.png";
import Elon from "../assets/icons/Elon.png";
import Verifed from "../assets/icons/Verifed.png";
import Comment from "../assets/icons/Comment.png";
import Repost from "../assets/icons/Repost.png";
import Like from "../assets/icons/Like.png";
import BookMark from "../assets/icons/BookMark.png";
import Upload from "../assets/icons/Upload.png";
import { Link } from "react-router-dom";
export const Random_tweets = () => {
  const [data, getData] = useState();
  async function refresh() {
    const response = await axios.get(
      "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
    );
    console.log(response.data.data.content);
    getData(response.data.data.content);
  }
  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <article id="bg-2" className="font-sans flex items-center justify-center">
        <section className="w-[50vw] bg-black rounded-lg p-5">
          {/* header */}
          <div className="flex flex-row items-center justify-start">
            <img src={BackArrowW} className="w-5"></img>
            <p className="text-lg font-semibold text-white mx-5">Post</p>
          </div>
          <br></br>
          <div id="container ">
            {/* elon musk profile */}
            <div className="flex flex-row">
              <img src={Elon} className="w-12"></img>
              <div className="mx-1 text-white font-semibold">
                <div className="flex flex-row items-center">
                  <p>Elon Musk</p>
                  <img src={Verifed} className="w-4 h-4"></img>
                </div>

                <p className=" text-gray-400">@elonmusk</p>
              </div>
            </div>
            <p className="text-white my-2 text-lg">{data}</p>
            <div className="text-gray-400 text-sm my-2">
              <p>
                11:18PM . Jul 30,2024 .
                <strong className="text-white">20.5M</strong> Views
              </p>
            </div>
            <div>
              <hr className=" border-gray-900"></hr>
              {/* share, repost svg */}
              <div className="text-gray-400 flex flex-row justify-between text-xs items-center p-5">
                <IconText icon={Comment} data="4.9K" />
                <IconText icon={Repost} data="5.3K" />
                <IconText icon={Like} data="59K" />
                <IconText icon={BookMark} data="1.1K" />
                <IconText icon={Upload} />
              </div>
              <hr className=" border-gray-800" />
            </div>
            <p className="text-center text-gray-400 my-3">© chai aur code</p>
          </div>
        </section>
        <Link to="http://chaicode.com">
          <img
            src={Chai}
            className=" absolute w-20 bottom-5 right-6 rounded-lg"
          />
        </Link>
      </article>
    </>
  );
};
