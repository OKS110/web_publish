import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


export default function Layout({cartCount}) {
return (
    <div>
        <Header cartCount={cartCount}>

        </Header>

        <Outlet>

        </Outlet>

        <Footer>

        </Footer>
    </div>
    );
};