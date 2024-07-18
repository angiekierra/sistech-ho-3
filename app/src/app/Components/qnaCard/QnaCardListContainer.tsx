import { QnaCardList } from "./QnaCardList";

const data = [
    {title: "What is dropshipping", desc:"Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"},
    {title: "Who are your suppliers?", desc:"Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"},
    {title: "What is the shipping cost?", desc:"Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"},
    {title: "What is refund policy", desc:"Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"},
    {title: "Why choose us?", desc:"Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"},
    {title: "What is dropshipping", desc:"Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"},
];


function QnaCardListContainer() {
    return (
        <QnaCardList cards={data} />
    );
}

export { QnaCardListContainer };