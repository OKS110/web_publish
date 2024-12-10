export default function AirbnbComponent({img, d1, d2, d3, d4, isGood, color}){

    return (
        <div className="wrap">
                    <div className="image">
                        <img src={img} alt="img" />
                        {isGood && <span className="isgood">게스트 추천</span>}
                        <span className="like" style={{color: color}}>♥</span>
                    </div>

                    <div className="text">
                        <p className="d1">{d1}</p>
                        <p className="d2">{d2}</p>
                        <p className="d3">{d3}</p>
                        <p className="d4">{d4}</p>
                    </div>
        </div>
    );
}