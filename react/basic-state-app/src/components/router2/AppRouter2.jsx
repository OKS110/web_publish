import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AppAirbnb from "../airbnb/AppAirbnb.jsx";
import AppAladin from '../aladin/AppAladin.jsx';
import Avatar from "../avatar/Avater.jsx";
import AppCounter from '../counter/Appcounter.jsx';
import AppOlive from '../olive/AppOlive.jsx';
import AppBestSeller from '../yes24/AppBestSeller.jsx';
export default function AppRouter2() {
return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Layout/>}> {/** Layout 관련 컴포넌트 */}
                    <Route index element={<Home/>}></Route>
                    <Route path="airbnb" element={<AppAirbnb/>}></Route>
                    <Route path="aladin" element={<AppAladin/>}></Route>
                    <Route path="avatar" element={<Avatar/>}></Route>
                    <Route path="counter" element={<AppCounter/>}></Route>
                    <Route path="olive" element={<AppOlive/>}></Route>
                    <Route path="yes24" element={<AppBestSeller/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
};

function Home(){
    return (
        <h1>Home!!!</h1>
    );
}