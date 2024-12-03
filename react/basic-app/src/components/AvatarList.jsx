import Avatar from "./Avatar.jsx";

export default function AvatarList({list}){
    return(
        <ul>
            {list.map((item, index) => <li key={index}>
                <Avatar img={item.img} name={item.name}></Avatar>
            </li>)}
        </ul>
    );
}