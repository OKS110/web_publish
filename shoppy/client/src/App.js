import React, {useEffect, useState} from 'react';
// import Star from './pages/Star';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //react-router-dom에서 제공하는 컴포넌트
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
// import Carts from './pages/CartsBackup.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct2 from './pages/DetailProduct2.jsx';
// import Employees from './pages/Employees.jsx';
import './styles/shoppy.css';
import { AuthProvider } from './auth/AuthContext.js';
import NewProduct from './pages/NewProduct.jsx';
import CartsDB from './pages/CartsDB.jsx';
// import CartsBackup from './pages/CartsBackup.jsx';
import {CartProvider} from './context/CartContext.js'

export default function App() {
  // //장바구니 아이템 저장 : 배열

  const [cartList, setCartList] = useState(() => {
    try{
      const initCartList = localStorage.getItem('cartItems');
      return initCartList ? JSON.parse(initCartList) : [];

    }catch(error){
      console.log('로컬스토리지 데이터 작업 도중 에러 발생');
      console.log(error);
    }
  });
  
  const [cartCount, setCartCount] = useState(() => {
    try{
      const initCartList = localStorage.getItem('cartItems');
      return initCartList ? JSON.parse(initCartList).length : 0;

    }catch(error){
      console.log('로컬스토리지 데이터 작업 도중 에러 발생');
      console.log(error);
    }
  }); //장바구니 상품 개수

  // // 로컬스토리지 재호출 --> cartList, cartCount 업데이트
  const refreshStorage = (updateCart, updateCount) => {
    setCartList(updateCart);
    setCartCount(updateCount);
  }

  // cartCount가 업데이트가 되면 localStorage에 cartList를 저장
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartList)); //JSON.stringfy가 없으면 [object Object] 형태
    }, [cartList])

  // 장바구니 추가
  const addCart = (cartItem) => {
    // console.log(cartItem);
    // 입력받은 cartItem이 cartList에 존재하면 qty+1, 존재하지 않으면 새로 추가
    // const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size) ?
    //     cartList.map(item => item.pid === cartItem.pid && item.size === cartItem.size ?
    //       {...item, qty:item.qty+1} : item
    //     ) 
    //     : [...cartList, cartItem]; //some() - 배열을 보고 true, false 반환
    const isCheck = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size);

    let updateCartList = [];

    if(isCheck){
      updateCartList = cartList.map(item => item.pid === cartItem.pid && item.size === cartItem.size ? 
        {...item, qty:item.qty+1}
        :item)
    }else{
      updateCartList = [...cartList, cartItem];
      setCartCount(cartCount + 1);
    }

    // const sortUpdateCartList = updateCartList.sort((a, b) => a.pid - b.pid); //오름차순 정렬
    // setCartList(sortUpdateCartList);
    setCartList(updateCartList);
    
  };

  // console.log('cartcount', cartCount);
  
  // console.log('cartList', cartList);
  

  return (
    <div>
      <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='/all' element={<Products/>}></Route>    
                    <Route path='/cart' element={<Carts refreshStorage={refreshStorage}/>}></Route>    
                    <Route path='/login' element={<Login/>}></Route>    
                    <Route path='/signup' element={<Signup/>}></Route>    
                    {/* <Route path='/employees' element= {<Employees/>}></Route> */}
                    <Route path={`/products/:pid`} element={<DetailProduct2 addCart={addCart}/>}> </Route>
                    <Route path={`/products/new`} element={<NewProduct/>}> </Route>
                    <Route path={`/cartdb`} element={<CartsDB/>}> </Route>
            </Route>
          </Routes>
        </BrowserRouter>
        </AuthProvider>
        </CartProvider>
        {/* <Star></Star> */}
    </div>
  );
}