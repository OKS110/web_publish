import React, {useState} from 'react';
// import Star from './pages/Star';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //react-router-dom에서 제공하는 컴포넌트
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct2 from './pages/DetailProduct2.jsx';
import Employees from './pages/Employees.jsx';
import './styles/shoppy.css';

export default function App() {
  //장바구니 아이템 저장 : 배열

  const [cartList, setCartList] = useState([]); //장바구니 아이템 저장 : 배열
  const [cartCount, setCartCount] = useState(0); //장바구니 상품 개수


  const addCart = (cartItem) => {
    console.log(cartItem);
    setCartList([...cartList, cartItem]);
    setCartCount(cartCount + 1);
  };

  console.log('cartcount', cartCount);
  
  console.log('cartList', cartList);
  

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout cartCount={cartCount}/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='/all' element={<Products/>}></Route>    
                    <Route path='/cart' element={<Carts cartList = {cartList}/>}></Route>    
                    <Route path='/login' element={<Login/>}></Route>    
                    <Route path='/signup' element={<Signup/>}></Route>    
                    <Route path='/employees' element= {<Employees/>}></Route>
                    <Route path={`/products/:pid`} element={<DetailProduct2 addCart={addCart}/>}> </Route>
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <Star></Star> */}
    </div>
  );
}

