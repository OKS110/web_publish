import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Carts() {

    // localStorage에 담긴 cartItems의 배열 객체 출력
    // const cartItems = localStorage.getItem("cartItems"); // 문자열
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems"))); // 문자열
    console.log(cartItems);

    // pids 배열 생성 cartItems의 pid값 pids 배열에 추가
    const pids = cartItems && cartItems.map((item) => item.pid); // map()은 배열은 반환하기 때문에 pid만 콜백으로 불러도 배열안에 출력된다. 
    console.log("pids", pids);
    
    // axios를 이용하여  DB 연동
    useEffect(() => {
        if(pids.length > 0) {
            axios.post("http://localhost:9000/product/cartItems", {"pids" : pids})
            .then(res => {
                console.log("res.data ===> ", res.data)
                // cartItems에 res.data 정보 추가
                const updateCartItems = cartItems.map(item => {
                    const matchedItem = res.data.find(dataItem => dataItem.pid === item.pid);
                    return matchedItem ? { 
                        ...item,
                        pname: matchedItem.pname,
                        price: matchedItem.price,
                        description: matchedItem.description,
                        image: matchedItem.image
                    } : item;
                });
                
                setCartItems(updateCartItems);
            })
            // [{pid, siz, qty, pname, price...[image]}, {}]
            .catch(error => console.log(error))
        }
    }, [])
    
        console.log("cartItems ==>>", cartItems);
        
return (
    <div className="content">
        <h1>MyCart!!!</h1>

        <table border='1'>
            <tr>
                <th>PID</th>
                <th>Size</th>
                <th>Qty</th>
                <th>Pname</th>
                <th>price</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
            {cartItems && cartItems.map((item) => 
                <tr>
                    <td>{item.pid}</td>
                    <td>{item.size}</td>
                    <td>{item.qty}</td>
                    <td>{item.pname}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img src={item.image} alt="" style={{width:"100px"}}/></td>
                </tr>
            )}
        </table>
    
        
    </div>
    );
};