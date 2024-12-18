

export default function BestBookAvater({rank, img}) {
return (
    <div className="container-avatar">
        <p>{rank}</p>
        <div>
            <img src= {img} alt="img1" />
        </div>
    </div>
    );
};