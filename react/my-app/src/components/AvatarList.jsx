import Avatar from "./Avatar.jsx";

export default function AvatarList({avatar_list}){

    return (
        <ul>
            {avatar_list.map((object, index) =>  
                <li key={index}><Avatar img={object.img} name={object.name} age={object.age}></Avatar></li>
            )}
        </ul>
    );
}