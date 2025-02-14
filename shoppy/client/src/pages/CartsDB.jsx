import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.js";
import { useNavigate } from "react-router-dom";

export default function Carts({refreshStorage}) {
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
    // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems"))); // 문자열
    // console.log(cartItems);

    // pids 배열 생성 cartItems의 pid값 pids 배열에 추가
    const pids = cartList && cartList.map((item) => item.pid); // map()은 배열은 반환하기 때문에 pid만 콜백으로 불러도 배열안에 출력된다. 
    console.log("pids", pids);
    
    // axios를 이용하여  DB 연동
    useEffect(() => {
        if(pids.length > 0) {
            axios.post("http://localhost:9000/product/cartItems", {"pids" : pids})
            .then(res => {
                console.log("res.data ===> ", res.data)
                // cartItems에 res.data 정보 추가
                const updateCartItems = cartList.map(item => {
                    const matchedItem = res.data.find(dataItem => dataItem.pid === item.pid);
                    return matchedItem ? { 
                        ...item,
                        pname: matchedItem.pname,
                        price: matchedItem.price,
                        description: matchedItem.description,
                        image: matchedItem.image
                    } : item;
                });
                
                setCartList(updateCartItems);
            })
            // [{pid, siz, qty, pname, price...[image]}, {}]
            .catch(error => console.log(error))
        }
    }, []);

    
        // console.log("cartItems ==>>", cartItems);
        
        // 주문하기 이벤트 처리
    const handleOrder = (type, pid, size) => {
        console.log(type, pid, size);
        const id = localStorage.getItem("user_id");
        let formData = [];
        // formData = {"id":id, "cartList":cartList}; //[ {}, {}, {} ] 주문하기

        if(type === 'all'){ //주문하기 버튼 클릭 - 전체상품
            formData = {"id":id, "cartList":cartList};
        }else if(type === "each"){ //계속 담아두기 - 개별 상품
            const filterItem = cartList.filter((item) => item.pid === pid && item.size === size);
            formData = { "id" : id, "cartList" : filterItem};
            console.log(formData);
        }


        // 1. 로그인 여부 체크
        if(isLoggedIn){

            axios.post(`http://localhost:9000/cart/add`, formData) //코드 재사용
                .then(res => {
                    if(res.data.result_rows){
                        alert('장바구니 추가되었습니다.')
                        if(type === "all"){
                            // 주문하기 페이지 이동

                            // 로컬 스토리지 전체 아이템 삭제
                            clearStorageAll();
                            refreshStorage([], 0);
                            // App.js의 cartList, cartCount 초기화
                   
                        }else{
                            // 로컬스토리지 개별아이템 삭제
                            const updateCart = clearStorageEach(pid, size);
                            refreshStorage(updateCart, updateCart.length);
                        }
                    }
                    } )
                .catch(error => console.log(error));
            
        }else{
            // alert("로그인이 필요한 서비스입니다.");
            // navigate('/login');
            const select = window.confirm('로그인이 필요한 서비스입니다.');
            select && navigate('/login');
            // state = 로그아웃 ==> 로그인 > DB연동 후 저장
            
        }
    };

    // 로컬스토리지 전체 아이템 삭제
    const clearStorageAll = () => {//localStorage는 비동기 처리를 하고 setCartList는 동기처리를 하므로 코드가 순차적으로 처리되지 않는다. 
                                    //      따라서 setTimeout으로 감싸서 setCartList를 비동기처리한다.
        console.log("----------------------로컬스토리지 전체 삭제 시작");
        localStorage.removeItem("cartItems"); //localStorage 전체 아이템 삭제 - 비동기 처리
        navigate('/cartdb');
        // setTimeout(() => {
        //     setCartList([]);
        // }, 0);
        console.log("----------------------로컬스토리지 전체 삭제 종료");
    };

    const clearStorageEach = (pid, size) => {
        const updateCart = cartList && cartList.filter((item) => !(item.pid === pid && item.size === size));
        // console.log('updateCart ---> ', updateCart);
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", updateCart);
        setTimeout(() => {
            setCartList(updateCart);
        }, 0);
        
        return updateCart;
    };

return (
    <div className="content">
        <h1>MyCart!!!</h1>
        <button onClick={() => handleOrder("all")}>주문하기</button>
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
            {cartList && cartList.map((item) => 
                <tr>
                    <td>{item.pid}</td>
                    <td>{item.size}</td>
                    <td>{item.qty}</td>
                    <td>{item.pname}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img src={item.image} alt="" style={{width:"100px"}}/></td>
                    {/* <td><button 
                            onClick={() => handleOrder("each", item.pid, item.size)}>계속 담아두기</button>
                    </td> */}
                </tr>
            )}
        </table>
    
        
    </div>
    );
};