import '../css/Avatar.css';

export default function AvatarImage({img}){
    return(
        <div>
            <img src={img} className="avatar-img"></img>
        </div>
        

    );
}