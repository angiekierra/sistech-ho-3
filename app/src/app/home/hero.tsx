import React from "react";
import Image from "next/image";
import { Button } from "../Components/button/Button";

export default function Hero() {
  return (
    <div className="bg-white p-20">
      <div className="w-full">
        <div className="flex flex-row flex-wrap justify-between gap-8 items-center m-8 max-w-full ">
          <div className="w-[50%]">
            <h1 className="font-Raleway font-extrabold text-secondary-black text-[3rem] sm:text-[2.5rem]">
              You bring the <span>expertise</span>, we will make it unforgettable
            </h1>
            <p className="text-secondary-black p-2">
              Using highly personalised activities, videos and animations you can
              energise your students and motivate them to achieve their learning
              goals as they progress through a journey.
            </p>
            <div className="flex flex-row gap-2">
              <Button variant="green">Register</Button>
              <Button variant="white">Login</Button>
            </div>
          </div>
          <Image src="/header.png" width={400} height={600} alt="header" />
        </div>
      </div>
    </div>
  );
}
