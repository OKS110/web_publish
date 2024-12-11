import React, {useState}from "react";
import Header from './Header.jsx';
import MenuList from "./header/MenuList.jsx";

import './Olive.css';
import Body from "./Body.jsx";
import ProductList from "./body/ProductList.jsx";
export default function AppOlive() {
    const [id, setId] = useState('');
    const [cartList, setCartList] = useState([]);
    //배열에 id 저장 --> 배열의 길이 --> cartCount


    const handleCartApp = (id) => {
        setId(id);
        setCartList([...cartList, id]);
        // cartList.push(id);
    };
    console.log(cartList.length);
    
    
return (
        <>
        <Header>
            <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png"></img>
            <MenuList count={cartList.length}></MenuList>
        </Header>
        <Body>
            <ProductList cart={handleCartApp}></ProductList>
        </Body>
        </>
    );
};