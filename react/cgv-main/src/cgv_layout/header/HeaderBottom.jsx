import HeaderBottomSearch from "./HeaderBottomSearch.jsx";
import HeaderBottomMenu from "./HeaderBottomMenu.jsx";
import { useEffect, useState } from "react";
import { fetchJSON } from "../js/commons.js";

export default function HeaderBottom(){
    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        // fetch("/data/cgv_header.json")
        // .then(data => data.json())
        // .then(jsonData => setMenuList(jsonData.menuList))
        // .catch(error => console.log(error))
        
        fetchJSON("data/cgv_header.json")
        .then(result => setMenuList(result.menuList))
        .catch(error => console.log(error))
    },[]);
    return(
        <div class="bottom-wrap">
            <div class="header-bottom">
            
                <ul>
                    {menuList && menuList.map((item, index) =>
                    <li key={index}>
                        <HeaderBottomMenu name={item.name}/>
                    </li> )}
                </ul>

                <HeaderBottomSearch />
               
            </div>
        </div>
    );
}