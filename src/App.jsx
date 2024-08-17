import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./assets/utils/Button";
export const App = () => {
  return (
    <div>
      <section className="flex justify-center items-center ms-center flex-col h-[100vh] bg-zinc-900">
        <h1 className="text-[80px] text-white">Welcome</h1>
        <h2 className="text-[40px] font-light text-slate-600">
          Task Assignment Solutions
        </h2>
        <div className="m-5">
          <Button path="/random-user" text="Random User Profile" />
          <Button path="/random-jokes" text="Random Jokes tweet" />
          <Button path="/cats-listing" text="Cats listing" />
        </div>
      </section>
    </div>
  );
};
