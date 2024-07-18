import exp from "constants";
import React from "react";

type QnaProps = {
    title: string,
    desc: string,
}

function QnaCard({title,desc}: QnaProps){
    return (
        <div className="bg-white border border-gray-400 p-6 rounded-lg text-secondary-black ">
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            <p className="text-sm">{desc}</p>
        </div>
    );
}

export type { QnaProps };
export { QnaCard };