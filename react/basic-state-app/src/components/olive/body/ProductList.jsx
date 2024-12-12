import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]); //전체 상품 리스트
    const [list, setList] = useState([]); //출력용 리스트
    
    const formatPrice = (price) => {
        return Number(price).toLocaleString(); // Convert string to number and format
    };

    useEffect(() => {
        fetch('/data/olive.json')
        .then(data => data.json())
        .then(jsonData => {
            setProductList(jsonData);
            setList(jsonData);
        })
        .catch(error => console.log(error))
    }, []); //json 데이터가 실시간으로 변하는 상황이라면 여기서
    
    const totalCart = (id) => {
        // alert(`productList - 카트 클릭!! ${id}`);
        cart(id); //AppOlive의 handleCartApp함수 호출
    };
  

    const [type, setType] = useState("");
    const handleTypeChange = (event) => { //event는 object Type(input 태그에서 발생하는 event)
        setType(event.target.value);
    };
    
    

    useEffect(() => {
        //productList.map() ----> 결과 : ['<li>~</li>']
        //productList.filter() ----> 결과 : list = [{item}, {item} ...]
        if(type === "total"){
            return setList(productList);
        }else{
            const list = productList.filter((item) => {
                if(type === "sale" && item.isSale){
                    return item;
                }else if(type === "coupon" && item.isCoupon){
                    return item;
                }else if(type === "today" && item.isToday){
                    return item;
                }
            });
            console.log(`list = ${list}`);
            setList(list);
        }
        
    }, [type]); //어떤 상태나 props가 변경될 때 이 useEffect를 실행할지를 결정 - type이 변경될 때마다 실행


return (
    <>
        <div>
            <input type="radio" name="type" value="total" onClick={handleTypeChange}/>전체
            <input type="radio" name="type" value="sale" onClick={handleTypeChange}/>세일
            <input type="radio" name="type" value="coupon" onClick={handleTypeChange}/>쿠폰
            <input type="radio" name="type" value="today" onClick={handleTypeChange}/>오늘드림
        </div>

        <ul className="product-list-container">
            {list && list.map((item, index) => 
                <li key={index}><Product  id={item.id} img={item.img} title={item.title} description={item.description} 
                    price={formatPrice(item.price)}
                    sprice={formatPrice(item.sprice)} 
                isSale={item.isSale} isCoupon={item.isCoupon} isToday={item.isToday}
                totalCart = {totalCart}></Product></li>
            )}
        </ul>
    </>

    );
};