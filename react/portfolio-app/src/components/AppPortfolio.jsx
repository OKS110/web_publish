
import Header from "./AppHeader/Header.jsx";
import Body from "./AppBody/Body.jsx";
import Footer from "./AppFooter/Footer.jsx";
import './css/style.css';
import AppHeader from "./AppHeader/AppHeader.jsx";
import AppBody from "./AppBody/AppBody.jsx";
import AppFooter from "./AppFooter/AppFooter.jsx";

export default function AppPortfolio() {
return (
<>
    <AppHeader>
        <Header></Header>
    </AppHeader>

    <AppBody>
        <Body></Body>
    </AppBody>

    <AppFooter>
        <Footer></Footer>
    </AppFooter>

</>
    );
};