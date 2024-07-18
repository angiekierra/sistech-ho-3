import React from "react";
import { Button } from "../Components/button/Button";

export default function Courses() {
  return (
    <div className="bg-secondary-black p-20 text-white w-full">
      <div className="w-full">
        <div className="flex flex-col flex-wrap justify-between gap-8 items-center m-8 max-w-full text-center ">
            <h4 className="font-bold text-primary-green" >Our Courses</h4>
            <h3 className="font-bold text-white" >Our Best Courses Offered and Taught by The Best Instructors</h3>
            <p className="text-white">Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.</p>
          <Button variant="green" href="/courses" >See Our Courses</Button> 
        </div>
      </div>
    </div>
  );
}
