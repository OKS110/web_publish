
export default function AirbnbComponent(props){
    return(
        <>
            <div className="wrap">
                <div className="image">
                    <img src={props.img}/>
                </div>
                <div className="text">
                    <p className="d1">{props.d1}</p>
                    <p className="d2">{props.d2}</p>
                    <p className="d3">{props.d3}</p>
                    <p className="d4">{props.d4} / 박</p>
                </div>
            </div>
        </>
    );
}