import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
export default function DetailProduct({addCart}) {
    const {pid} = useParams(); // {"pid" : pid}
    const [product, setProduct] = useState({});
    const [size, setSize] = useState('XS');

    useEffect(() => {
        axios.get('/data/products.json') 
        //data 앞에 '/' 를 붙여주는 것이 좋다. (axios 사용 시) url에서 바로 검색하기 때문(?)
        // http://localhost:3000/data/products.json
        .then((res) => {
            
            res.data.filter((product) => {
                if(product.pid === pid) setProduct(product || {});
            }) // - 1


            // const resPid = res.data.filter((product) => {
            //     return product.pid === pid;
            // });
            // // {resPid.map((item) => setProduct(item))}; // - 2
            // setProduct(resPid[0]); - 3

        })
        .catch(err => console.log(err))
    }, []);
    console.log(product);
    
    // useEffect(() => {
    //     setProduct({}); // 데이터를 가져오기 전 상태 초기화
    //     axios.get('/data/products.json') 
    //         .then((res) => {
    //             const resPid = res.data.find((item) => String(item.pid) === pid); // 배열에서 조건에 맞는 첫 번째 항목을 바로 반환(객체)
    //             setProduct(resPid || {}); // 일치하는 데이터가 없으면 빈 객체 저장
    //         })
    //         .catch(err => console.log(err));
    // }, [pid]); // - 4



    //장바구니 추가 버튼 이벤트
    const addCartItem = () => {
        // 장바구니 추가 항목 : { pid, size, count, price }
        const cartItem = {
            "pid": product.pid,
            "size" : size,
            "qty": 1,
            "price":product.price
        }

        addCart(cartItem); //App.js의 addCart 함수 호출
    };

    console.log(size);
    
    return (
        <div className='content'>
        <div className='product-detail'>
            <img src={product.image} />
            <ul>
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">{`${Number(product.price).toLocaleString()} 원`}</li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li>
                        <span className='product-detail-select1'>옵션 : </span>
                        <select className='product-detail-select2' onChange={(e) => {setSize(e.target.value)}}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                        </select>
                    </li>
                    <li>
                        <button type="button" className='product-detail-button'
                         onClick={addCartItem}>
                            장바구니 추가</button>
                    </li>
            </ul>
        </div>
</div>
    );
};