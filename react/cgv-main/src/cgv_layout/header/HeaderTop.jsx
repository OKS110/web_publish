import Logo from "./Logo.jsx";
import HeaderTopImage from "./HeaderTopImage.jsx";
import Nav from "./Nav.jsx";

export default function HeaderTop(){
    
    return(
        <>
        <div className="top-wrap">
            <div className="header-top center-layout">
                <Logo 
                    href="#" 
                    src="images/logoRed.png" 
                    text="DEEP DIVE SPACE" 
                    target="_self" 
                    alt="CGV Logo"
                />
                <HeaderTopImage src="images/header_card.png" alt="Card Image" />

                <Nav></Nav>
            </div>
        </div>
        </>
        

    );
}