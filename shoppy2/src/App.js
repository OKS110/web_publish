import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //react-router-dom에서 제공하는 컴포넌트
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './styles/shoppy2.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element = {<Home/>}></Route>
            <Route path='/all' element={<Products/>}></Route>    
            <Route path='/cart' element={<Carts/>}></Route>    
            <Route path='/login' element={<Login/>}></Route>    
            <Route path='/signup' element={<Signup/>}></Route>   
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
