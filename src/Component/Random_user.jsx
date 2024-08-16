import React, { useEffect, useState } from "react";
import BackArrow from "../assets/icons/BackArrow.png";
import Reload from "../assets/icons/Reload.png";
import Location from "../assets/icons/Location.png";
import CallMe from "../assets/icons/CallMe.png";
import Chai from "../assets/icons/Chai.png";
import { Details } from "../assets/utils/Details";
import axios from "axios";
import { Link } from "react-router-dom";
export const Random_user = () => {
  const [detail, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    refresh();
  }, []);

  function refresh() {
    setLoading(true);
    axios
      .get("https://api.freeapi.app/api/v1/public/randomusers/user/random")
      .then((res) => {
        console.log(res.data.data);
        return userDetails(res.data.data);
      })
      .catch((er) => console.log(er))
      .finally(() => setLoading(false));
  }

  function userDetails(user) {
    if (!user) console.log(undefined);
    const personal_detail = {
      name: user.name,
      image: user.picture.large,
      location: user.location,
      username: user.login.username,
      city: user.location.city,
      nationality: user.nat,
      date_of_birth: user.dob.date,
      phone_no: user.phone,
      registered_since: user.registered.date,
    };

    setDetails(personal_detail);
    console.log("details", personal_detail);
    console.log(
      user.location.timezone.description,
      user.location.timezone.offset
    );
  }

  if (loading) {
    return <h1>Data loading</h1>;
  }
  if (detail === undefined) {
    return <h1>No user details available</h1>; // Handle case where details are not yet loaded
  } else {
    return (
      <article className="bg-black ">
        <div
          className="text-black h-[100vh] min-w-full flex justify-center items-center ms-center font-serif p-12"
          id="bg-1"
        >
          <article className=" border-8 border-white rounded-2xl  w-[30%] ">
            {/* card */}
            <article className="bg-[#B6B3F3]  p-5 rounded-lg   ">
              {/* top heading */}
              <div className="flex flex-row justify-between items-center ">
                <img src={BackArrow} className="w-[1rem]" />
                <p className=" font-semibold text-lg text-black/[0.7]">
                  Profile Overview
                </p>
                <button onClick={() => refresh()}>
                  <img src={Reload} className="w-[2rem]" />
                </button>
              </div>
              <br></br>
              {/* image */}
              <div className="relative flex flex-col items-center m-2 ">
                <img src={detail.image} className="rounded-full max-w-28" />
                <span className="absolute text-white bg-black rounded-3xl p-3 text-[10px] top-0 right-12">
                  {detail.name?.title}
                </span>
              </div>
              {/* Name nad usernames */}
              <div className="flex flex-col items-center ">
                <p className=" text-2xl">
                  {detail.name.first} {detail.name.last}
                </p>
                <br />
                <p className=" text-sm leading-5 lowercase font-sans">
                  {detail.username}
                </p>
              </div>
              <br />
              <hr className="border-1 border-slate-400"></hr>
              {/* map and phone */}
              <div className="flex justify-center flex-row gap-2 text-black/[0.7] font-sans text-xs">
                <div className="flex justify-between items-center ">
                  {/* icon and name */}
                  <button>
                    <img
                      src={Location}
                      className=" w-6 m-2"
                      alt="loaction icon"
                    ></img>
                  </button>

                  <span>Location</span>
                </div>

                <div className="flex justify-around items-center font-sans">
                  {/* icon and name */}
                  <button>
                    {" "}
                    <img
                      src={CallMe}
                      className=" w-6 m-2"
                      alt="telephone icon"
                    ></img>
                  </button>

                  <span>Call Me</span>
                </div>
              </div>
              <hr className="border-1 border-slate-400" />

              {/* details section */}
              <section className=" grid grid-flow-col gap-x-2 grid-cols-2  my-2">
                <div className="gap-2">
                  <Details label="City" detail={detail.city} />
                  <Details
                    label="Date of Birth"
                    detail={detail.date_of_birth}
                  />
                  <Details
                    label="Time Zone"
                    detail={detail.location.timezone.description}
                    offset={detail.location.timezone.offset}
                  />
                </div>
                <div>
                  <Details label="Nationality" detail={detail.nationality} />
                  <Details label="Phone no." detail={detail.phone_no} />
                  <Details
                    label="Registered Since"
                    detail={detail.registered_since}
                  />
                </div>
              </section>
              {/* card footer */}
              <Link className="" to="https://chaicode.com">
                <img
                  src={Chai}
                  className="relative w-16 rounded-xl left-[80%] top-5 "
                ></img>
              </Link>

              <div className=" text-center text-white/[0.6] text-[0.5rem] font-sans">
                <p>© chai aur code</p>
              </div>
            </article>
          </article>
        </div>
      </article>
    );
  }
};
