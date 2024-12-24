import NavMenu from "./NavMenu.jsx";
import { useEffect, useState } from "react";
export default function Nav(){
    const [topMenuList, setTopMenuList] = useState([]);    
    useEffect(() => {
        fetch("/data/cgv_header.json")
        .then(data => data.json())
        .then(jsonData => setTopMenuList(jsonData.topMenuList))
        .catch(error => console.log(error))
    },[]);
    return (
        <nav>
            <ul>
                {topMenuList&&topMenuList.map((menu, index) => (
                     <li key={index}>
                        <NavMenu href={menu.href} src={menu.src} name={menu.name}/>
                     </li> 
                ))}
            </ul>
        </nav>
    );
}