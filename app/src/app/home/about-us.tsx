import React from "react";
import Image from "next/image";
import { Button } from "../Components/button/Button";

export default function AboutUs() {
  return (
    <div className="bg-white p-20">
      <div className="w-full">
        <div className="flex flex-row flex-wrap justify-between gap-8 items-center m-8 max-w-full ">
            <div className="w-[50%]">
                <h4 className="font-bold text-primary-green">About Us</h4>
                <h2 className="font-bold text-secondary-black ">eLearning providing the best oppurtunities to the students around the globe</h2>
                <p className="text-black" >Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.</p>
                <div className="flex flex-row gap-2">
                <Button variant='green'>Register</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Image src="/about-us-1.png" width={400} height={600} alt="about-us-1" />
                <Image src="/about-us-2.png" width={400} height={600} alt="about-us-2" />
            </div>
        </div>
      </div>
    </div>
  );
}
