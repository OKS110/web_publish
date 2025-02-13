import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.js";
import { useNavigate } from "react-router-dom";

export default function Carts() {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    //장바구니 아이템 저장 : 배열
    const [cartList, setCartList] = useState(() => {
    try{
      const initCartList = localStorage.getItem('cartItems');
      return initCartList ? JSON.parse(initCartList) : [];

    }catch(error){
      console.log('로컬스토리지 데이터 작업 도중 에러 발생');
      console.log(error);
    }
  });


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
        
        // 주문하기 이벤트 처리
    const handleOrder = () => {
        // 1. 로그인 여부 체크
        if(isLoggedIn){
            // state = 로그인 ==> DB연동 후 저장
            // {"id" : "test1", "cartList":[~~~]}
            // console.log("isLoggedIn ==> ", isLoggedIn);
            const id = localStorage.getItem("user_id");
            const formData = {"id":id, "cartList":cartList};
            axios.post("http://localhost:9000/cart/add", formData)
                .then(res => {if(res.data.result_rows){alert('장바구니 추가되었습니다.')}
                        localStorage.removeItem("cartItems");
                    } )
                .catch(error => console.log(error));
            
        }else{
            // alert("로그인이 필요한 서비스입니다.");
            // navigate('/login');
            const select = window.confirm('로그인이 필요한 서비스입니다.');
            select && navigate('/login');
            // state = 로그아웃 ==> 로그인 > DB연동 후 저장
            
        }
        
    }

return (
    <div className="content">
        <h1>MyCart!!!</h1>
        <button onClick={handleOrder}>주문하기</button>
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
                    <td><button>계속 담아두기</button></td>
                </tr>
            )}
        </table>
    
        
    </div>
    );
};