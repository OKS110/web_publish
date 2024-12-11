import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]);
    
    const formatPrice = (price) => {
        return Number(price).toLocaleString(); // Convert string to number and format
    };

    useEffect(() => {
        fetch('/data/olive.json')
        .then(data => data.json())
        .then(jsonData => setProductList(jsonData))
        .catch(error => console.log(error))
    }, []);
    
    const totalCart = (id) => {
        // alert(`productList - 카트 클릭!! ${id}`);
        cart(id); //AppOlive의 handleCartApp함수 호출
    };
  
    
return (
        <ul className="product-list-container">
            {productList && productList.map((item, index) => 
                <li key={index}><Product  id={item.id} img={item.img} title={item.title} description={item.description} 
                    price={formatPrice(item.price)}
                    sprice={formatPrice(item.sprice)} 
                isSale={item.isSale} isCoupon={item.isCoupon} isToday={item.isToday}
                totalCart = {totalCart}></Product></li>
            )}
        </ul>
    );
};