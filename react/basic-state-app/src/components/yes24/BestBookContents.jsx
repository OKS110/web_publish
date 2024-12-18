export default function BestBookContents(props) {
return (
    <div className="container-content">
        <div>
            {props.suggest && <span>강력추천</span>}
            {props.today && <span>오늘의 책</span>}
        </div>
        <div>
            <span>[{props.type}]</span>
            <span>{props.title}</span>
        </div>
        <div>
            <span>{props.author}</span>
            <span>{props.company}</span>
            <span>{props.pubDate}</span>
        </div>
        <div>
            <span>{props.price}원</span>
            <span>({props.perSale}% 할인)</span>
            <span>p {props.point}원</span>
        </div>
    </div>
    );
};