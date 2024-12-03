import '../css/Avatar.css';
import AvatarImage from './AvatarImage.jsx';

export default function AvatarImageList({list}){
    
    console.log(list);
    
    return(
        <ul>
            {list.map((item, index)=>{                
                return <li key={index}><AvatarImage img={item.img}></AvatarImage></li>
            })}
        </ul>
    );
}