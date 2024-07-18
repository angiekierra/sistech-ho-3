import React from "react";
import Image from "next/image";
import { QnaCardListContainer } from "../Components/qnaCard/QnaCardListContainer";

export default function QNA() {
  return (
    <div className="bg-white p-20 text-secondary-black w-full">
      <div className="w-full">
        <div className="flex flex-col flex-wrap justify-between gap-8 items-center m-8 max-w-full text-center ">
            <h4 className="font-bold text-primary-green" >FAQs</h4>
            <h3 className="font-bold" >Frequently Asked Questions</h3>
            <p >Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.</p>
            {/* CARDS */}
            <QnaCardListContainer/>
        </div>
      </div>
    </div>
  );
}
