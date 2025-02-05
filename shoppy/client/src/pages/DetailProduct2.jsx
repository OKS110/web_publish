import React, { useState, useEffect } from "react";
// import ReactDom from 'react-dom';
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import Detail from "../components/Detail.jsx";
// import Review from '../components/review/Review.jsx'
import Review2 from "../components/review2/Review2.jsx";
import QnA from "../components/QnA.jsx";
import ReturnDelivery from '../components/ReturnDelivery.jsx'
import StarRating from "../components/review2/StarRating.jsx";
import ImageList from "../components/review2/ImgList.jsx";
// import QnA2 from "../components/QnA2.jsx";
// import ProductDetailTab from "../components/ProductDetailTab.jsx";
// import QnA2copy from "../components/QnA2copy.jsx";

export default function DetailProduct({ addCart }) {
    const tabList = [
        {'name': 'DETAIL'},
        {'name': 'REVIEW'},
        {'name': 'Q&A'},
        {'name': 'RETURN & DELIVERY'}
    ];
    

    const { pid } = useParams();
    const [product, setProduct] = useState({});
    const [size, setSize] = useState("XS"); 
    const [category, setCategory] = useState('REVIEW');

    const [select, setSelect] = useState('REVIEW');
    const handleChangeSelect = (name) => {
        setSelect(name);
        setCategory(name);
    }
    
    const [imgList, setImgList] = useState([]); // detail, review일 때 이미지 개수가 달라짐

    useEffect(() => {
        axios
            .get("/data/products.json") // http://localhost:3000/data/products.json
            .then((res) => {
                res.data.filter((product) => {
                    if (product.pid === pid){
                        setProduct(product);
                        setImgList(product.imgList);
                    }
                });
            })
            .catch((error) => console.log(error));
    }, []); 

    
    //장바구니 추가 버튼 이벤트

    const addCartItem = () => {
      //장바구니 추가 항목 : { pid, size, count, price }
      // alert(`${pid} --> 장바구니 추가 완료!`);
      // console.log(product.pid, product.price, size, 1);
        const cartItem = {
            pid: product.pid,
            size: size,
            qty: 1,
            price: product.price,
        };
        addCart(cartItem); // App.js의 addCart 함수 호출
    };  

    return (
        <div className="content">
            <div className="product-detail-top">
                <div className="product-detail-image-top">
                    <img src={product.image} />
                    

                        <ImageList className="product-detail-image-top-list"
                                imgList={imgList}/>
                                 {/** ul 태그를 이미지 리스트로 만들어서 Detail일 때 3개, review일 때 6개 마지막 이미지에 더보기 추가 */}
                </div>    
                <ul className="product-detail-info-top">
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">
                        {`${parseInt(product.price).toLocaleString()}원`}
                    </li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li>
                        <StarRating totalRate={4.2} className="star-coral"/> <span>572개 리뷰 &nbsp;&nbsp; {">"}</span>
                    </li>
                    <li>
                        <p className="product-detail-box">신규회원, 무이자 할부 등</p>
                    </li>
                    <li className="flex">
                        <label className="product-detail-label">사이즈 </label>
                        <select
                            className="product-detail-select2"
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li className="flex">
                        <button type="button" className="product-detail-button order">
                        바로 구매
                        </button>
                        <button
                            type="button"
                            className="product-detail-button cart"
                            onClick={addCartItem}
                        >
                        쇼핑백 담기
                        </button>
                        <div type="button" className="gift">
                            <PiGiftThin />
                            <div className="gift-span">선물하기</div>
                        </div>
                    </li>
                    <li>
                        <ul className="product-detail-summary-info">
                            <li>상품 요약 정보</li>
                        </ul>
                    </li>
                </ul>
            </div>  
            {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
            <div className="product2-detail-tab">
                <ul className="product2-detail-tab-ul">
                    { tabList && tabList.map((item) => (
                        <li className={ select === item.name ? "product2-detail-tab-li onClick" : "product2-detail-tab-li" }>
                            <a onClick={() => handleChangeSelect(item.name)}>{item.name}</a>
                        </li>
                    )) }
                </ul>
                <div className="una-qna-list">
                    { category === 'DETAIL' ? <Detail /> : null }
                    { category === 'REVIEW' ? <Review2 /> : null }
                    { category === 'Q&A' ? <QnA /> : null }
                    { category === 'RETURN & DELIVERY' ? <ReturnDelivery /> : null }
                </div>
            </div>
        </div>
    );
}

/* *************************** DetailProduct2 ***************************** */
// .product2-detail-tab-ul {
//     width: 1200px;
//     margin: 0 auto;
//     margin-top: 20px;
//     display: flex;
//     align-items: center;
//     text-align: center;
//   }
  
//   .product2-detail-tab-li {
//     display: block;
//     border: 1px solid silver;
//     border-bottom: 1px solid black;
//     width: 300px;
//     height: 50px;
//     line-height: 50px;
//     text-decoration: none;
//     color: black;
//   }
  
//   .product2-detail-tab-li > a {
//     text-decoration: none;
//     color: black;
//     display: inline-block;
//     width: 100%;
//     height: 100%;
//     cursor: pointer;
//   }
  
//   .onClick {
//     border: 1px solid black;
//     border-bottom: none;
//   }
  
//   .una-qna-list {
//     width: 1200px;
//     margin: 0 auto;
//   }