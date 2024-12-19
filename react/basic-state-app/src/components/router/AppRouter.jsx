import {BrowserRouter, Routes, Route} from 'react-router-dom'; //react-router-dom에서 제공하는 컴포넌트
// (대문자로 시작하는 것을 눈치채자. 즉 return에 작성한다.)
import Home from './Home.jsx';
import CgvLoginForm from '../form/CgvLoginForm.jsx';
import Signup from '../form/Signup.jsx';
import About from './About.jsx';
import Support from './Support.jsx';
import Layout from './Layout.jsx';
import AppBestSeller from '../yes24/AppBestSeller.jsx';
export default function AppRouter() {
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/login' element={<CgvLoginForm/>}></Route>    
                <Route path='/signup' element={<Signup/>}></Route>    
                <Route path='/about' element={<About/>}></Route>    
                <Route path='/support' element={<Support/>}></Route>    
                <Route path='/bestseller' element={<AppBestSeller/>}></Route>    
            </Route>
        </Routes>
    </BrowserRouter>
    );
};