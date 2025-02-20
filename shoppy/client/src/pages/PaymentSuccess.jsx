import React, { useSearchParams } from "react-router-dom";
import { OrderContext } from "../context/OrderContext.js";
import { useOrder } from "../hooks/useOrder.js";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

export default function PaymentSuccess() {

    const {getOrderList, saveToOrder} = useOrder();
    const {orderList} = useContext(OrderContext);
    const [searchParams] = useSearchParams();
    const pg_token = searchParams.get('pg_token');
    const [isRun, setIsRun] = useState(false);

    // 에러 발생
    // const tid = localStorage.getItem('tid');

    // pg_token && tid 가 존재하면 shoppy_order 테이블에 주문 내역을 insert, shoppy_cart는 delete
    // oid(pk), pid, id, odate, total_price, tid, type, size, qty 등..

    // useEffect(() => { //에러 - 값이 두 번 들어감.

    //     const fetchOrderList = async () => {
    //         const orderList = await getOrderList();
    //         console.log('fetchOrderList => ', orderList);
            
    //         if(orderList.length > 0){
    //             const totalPrice = orderList.reduce((sum, item) => sum + item.price * item.qty, 0);
    //             if(pg_token && tid){
    //                 // 1. axios를 통한 DB insert --> orderList, total_price
    //                 // 2. useOrder 커스텀 훅을 이용한 DB insert
                    
    //                 saveToOrder(orderList, totalPrice, tid, "kakaopay");
    //             }
    //         }   
    //     }
    //     if(pg_token && tid){fetchOrderList();}
       
    // }, [pg_token, tid]);
//  에러 발생 끝
    
    useEffect(() => {
        const tid = localStorage.getItem('tid');

        tid && setIsRun(true);

        const fetchOrderList = async () => { //주문 목록을 불러오는 함수
            const orderList = await getOrderList();
            console.log('fetchOrderList => ', orderList);
            
            if(orderList.length > 0){ 
                const totalPrice = orderList.reduce((sum, item) => sum + item.price * item.qty, 0);
                if(pg_token && tid){
                    // 1. axios를 통한 DB insert --> orderList, total_price
                    // 2. useOrder 커스텀 훅을 이용한 DB insert
                    
                    saveToOrder(orderList, totalPrice, tid, "kakaopay");
                }
            }   
        }

        if(isRun){
            fetchOrderList();
        }

        
    }, [isRun]);
    
    // console.log('total_price ==> ', orderList.reduce((sum, item) => sum + item.price * item.qty, 0));
    // console.log('payment success orderlist ==> ', orderList);
    
    // useEffect(() => { // 권장사항
    //     const approvePayment = async () => {
    //         if(pg_token && tid) {
    //             try{
    //                 const response = await axios.post('http://localhost:9000/payment/approve', {pg_token, tid});
    //                 console.log('결제 승인 완료', response.data);
                    
    //             }catch(error){
    //                 console.log("결제 승인 실패", error);
                    
    //             }
    //         }
    //     };
    //     approvePayment();
    // }, [pg_token, tid])
    
return (
    <div>
        {
            pg_token && 
            <h1>
                결제가 완료되었습니다.
            </h1>
        }

    </div>
    );
};