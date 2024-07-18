import { QnaCard } from "./QnaCard";
import type { QnaProps } from "./QnaCard";

type QnaCardListProps = {
    cards: QnaProps[];
}


function QnaCardList ({cards} : QnaCardListProps){
    return (
        <div className="flex flex-row items-center justify-evenly flex-wrap gap-2">
            {cards.map((card,index) => (
                <QnaCard key={index} {...card} />
            ))}
        </div>
    );
}

export { QnaCardList };