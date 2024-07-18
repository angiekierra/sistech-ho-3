import { BlogCardList } from "./BlogCardList";

const data = [
    {image:"/article1.png",title:"Why Java is Best Programming Language?",description:"Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... "},
    {image:"/article2.png",title:"Why Java is Best Programming Language?",description:"Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... "},
    {image:"/article3.png",title:"Why Java is Best Programming Language?",description:"Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... "},
    {image:"/article4.png",title:"Why Java is Best Programming Language?",description:"Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... "},
    {image:"/article5.png",title:"Why Java is Best Programming Language?",description:"Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... "},
    {image:"/article6.png",title:"Why Java is Best Programming Language?",description:"Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... "},
]

function BlogCardListContainer(){
    return(
        <BlogCardList cards={data}/>
    );
}

export { BlogCardListContainer };