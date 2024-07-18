import React from "react";
import Image from "next/image";
import { Button } from "../button/Button";

type BlogCardProps = {
    image: string,
    title: string,
    description : string,
}


function BlogCard({image,title,description}: BlogCardProps){
    return (
        <div className="w-[350px] h-[400px] flex flex-col justify-start bg-white p-4 rounded-lg">
            <div className="w-full h-48 overflow-hidden rounded-lg">
            <Image src={image} alt={title} width={200} height={400} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-secondary-black text-left py-2 text-xl font-bold">{title}</h4>
            <p className="py-2 text-sm">{description}</p>
            <Button variant="white">Read Article</Button>
        </div>  
    );
}

export type { BlogCardProps };
export { BlogCard };