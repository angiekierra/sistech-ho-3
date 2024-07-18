import { BlogCard } from "./BlogCard";
import type { BlogCardProps } from "./BlogCard";

type BlogCardListProp = {
    cards: BlogCardProps[];
}

function BlogCardList ({cards}: BlogCardListProp) {
    return (
        <div className="flex flex-row items-center justify-evenly flex-wrap gap-2">
            {cards.map((card,index) => (
                <BlogCard key={index} {...card} />
            ))}
        </div>
    )
}


export { BlogCardList };