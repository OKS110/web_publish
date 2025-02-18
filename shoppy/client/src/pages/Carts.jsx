import React, {useContext, useEffect, useRef} from "react";
import "../styles/cart.css";
import {AuthContext} from '../auth/AuthContext.js';
import {CartContext} from '../context/CartContext.js';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useCart} from '../hooks/useCart.js';
export default function Carts() {
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(AuthContext);
    const {cartList, setCartList} = useContext(CartContext);
    const { getCartList, updateCartList, deleteCartItem } = useCart();
    const hasCheckedLogin = useRef(false);

    useEffect(() => {
        if(hasCheckedLogin.current) return; // true: 로그인 상태 ==> 블록 return
        hasCheckedLogin.current = true;

        if(isLoggedIn){
            getCartList();
            
        }else{
            const select = window.confirm('로그인이 필요합니다. \n 로그인 하시겠습니까?');
            select ? navigate('/login') : navigate('/');
            setCartList([]);
        }
    }, [isLoggedIn])

    // 수량 업데이트

    const handleQtyUpdate =  (cid, type) => {
        const result = updateCartList(cid, type);
        console.log(type, "result :: ", result);
        
    }

    // 상품 삭제
    const handleQtyDelete = async (cid) => {
        const confirmDelete = window.confirm("장바구니에서 정말 삭제하시겠습니까?");
        
        if (!confirmDelete) {
            console.log("삭제 취소됨");
            return; // 취소하면 함수 종료
        }
    
        try {
            const result = await deleteCartItem(cid);
            console.log("result_delete ::", result);
        } catch (error) {
            console.error("삭제 중 오류 발생:", error);
        }
    };
    


    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
        {cartList && cartList.map((item) => <>
            <div className="cart-item" >
                    <img src={item.image} alt="" />
                    <div className="cart-item-details">
                        <p className="cart-item-title">{item.pname}</p>
                        <p className="cart-item-title">{item.size}</p> 
                        <p className="cart-item-price">
                            {item.price}원
                        </p>
                    </div>
                    <div className="cart-quantity">
                        <button onClick={(e) => handleQtyUpdate(item.cid, "decrease")}>
                        -
                        </button>
                        <input type="text" value={item.qty} readOnly />
                        <button  onClick={(e) => handleQtyUpdate(item.cid, "increase")}>
                        +
                        </button>
                    </div>
                    <button onClick={() => handleQtyDelete(item.cid)}
                        className="cart-remove"
                    >
                        🗑
                    </button>
                    </div>  
                </>)}
                <div className="cart-actions">                       
                        <button>주문하기</button>
                    </div>   
        </div>
    );
    }
