
export default function Dwitter(props){

    return (
        <div className="dwitter" key={props.i}>
            <div className="dwitter-image">
                <img src={props.img} alt="image1" />
            </div>
            <div className="title">
                <span>{props.name}</span>
                <span>{props.id}</span>
                <span>{props.date}</span>
            </div>
            <div className="content">{props.content}</div>
        </div>
    );
}