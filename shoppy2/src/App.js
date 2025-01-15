import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //react-router-dom에서 제공하는 컴포넌트
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import './styles/shoppy2.css';

function App() {
  const [count, setCount] = useState(0); // 장바구니 상품 개수
  const [cartItems, setCartItems] = useState([]); // 장바구니 아이템 저장 : 배열

  const addCart = (cartItem) => {
    // setCartItems([...cartItems, cartItem]);
    if (Array.isArray(cartItems)) {
      setCartItems([...cartItems, cartItem]);
  } else {
      setCartItems([cartItem]); // 비정상적으로 배열이 아닌 경우 배열로 초기화
  }

    // setCartItems(cartItem); //오류 - 초기값을 빈 배열로 설정했더라도 렌더링 시에 cartItem에 맞춰서 객체로 변환됨 따라서 배열로 넘어가지 않음.
    setCount(count + 1);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout count = {count}></Layout>}>
            <Route index element = {<Home/>}></Route>
            <Route path='/all' element={<Products/>}></Route>    
            <Route path='/cart' element={<Carts cartItems={cartItems}/>}></Route>    
            <Route path='/login' element={<Login/>}></Route>    
            <Route path='/signup' element={<Signup/>}></Route>   
            <Route path='/product/:pid' element={<DetailProduct addCart = {addCart}/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
