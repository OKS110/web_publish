import './Avatar.css';

export default function Avatar({name, img, age}){ //구조 분해 할당
    return (
    <div className='avatar-container'>
        <img src={img} className="avatar"></img>
        <div>{name}</div>
        <div>{age}</div>
    </div>
);
}