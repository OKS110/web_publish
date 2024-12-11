import Menu from "./Menu.jsx";
import { useState } from "react";
export default function MenuList({count}) {

    const menuList = [
        {"name": "회원가입"},  
        {"name": "로그인"},  
        {"name": "장바구니"},  
        {"name": "주문배송"},  
        {"name": "고객센터"},  
        {"name": "올영매장"},  
        {"name": "Global"},  
    ];

return (
        <ul>
            {menuList.map((item, index) => 
                <li key={index}>
                    <Menu name ={item.name} count={count}></Menu>
                    {/* {item.name === "장바구니" ? <span>{cartCount}</span>:''} */}
                </li>
            )}
        </ul>        
    );
};