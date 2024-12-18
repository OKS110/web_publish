import BestBookAvater from "./BestBookAvatar.jsx";
import BestBookButton from "./BestBookButton.jsx";
import BestBookContents from "./BestBookContents.jsx";
export default function BestBook({bookList}){ 


    return(
        <>
        {bookList.map((item, index) => 
        <div style={{display:'flex', marginBottom:'20px'}}>
            <BestBookAvater rank={index + 1} img={item.img}></BestBookAvater>
            <BestBookContents 
                suggest={item.suggest} 
                today={item.today} type={item.type} title={item.title} 
                author={item.author} company={item.company} pubDate={item.pubDate}
                price={item.price} perSale ={item.perSale} point={item.point}
            />
            <BestBookButton></BestBookButton>
       
        </div>
        )}
        
        
        </>
    );
}