import Menu from "./Menu.jsx";
import '../css/Menu.css';

export default function MenuList({list}){
    return(
        <ul className="menu-container">
            {list.map((item, index) => 
            <li key={index}><Menu name={item.name} href={item.href} bg={item.bg} color={item.color}></Menu></li>)}
        </ul>
    );
}