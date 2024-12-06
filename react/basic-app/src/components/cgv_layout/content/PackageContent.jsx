import PackageContentItem from "./PackageContentItem";
import PackageContentTitle from "./PackageContentTitle";
export default function PackageContent({listTitle, list}){
    return (
            
                <div>
                    <PackageContentTitle title={listTitle}></PackageContentTitle>
                    {list && list.map((item, index) => //list가 참인 경우
                    <ul>
                       <li key={index}>
                            <PackageContentItem src={item.src} alt={item.alt} text={item.text} price={item.price}></PackageContentItem>
                        </li>
                    </ul>
                 )}
                </div>
    );

}