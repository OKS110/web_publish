import './css/cgv.css';
import './css/commons.css';

import Header from "./Header.jsx";
import HeaderTop from "./header/HeaderTop.jsx";
import HeaderBottom from "./header/HeaderBottom.jsx";
import Contents from "./content/Contents.jsx";
import ContentsTop from "./content/ContentsTop.jsx";
import MovieChart from './content/MovieChart.jsx';
import EventSpecial from './content/EventSpecial.jsx';

import Footer from './footer/Footer.jsx';
import FooterMenu from './footer/FooterMenu.jsx';
import GotoButton from './content/GotoButton.jsx';


export default function AppCgv(){


    return(
        <>
            <Header>
                <HeaderTop></HeaderTop>
                <HeaderBottom></HeaderBottom>
                
            </Header>
            <div class="line"></div>
            <Contents>
                <ContentsTop></ContentsTop>
                <MovieChart></MovieChart>

                <EventSpecial></EventSpecial>
            </Contents>

            <Footer>
                <FooterMenu></FooterMenu>
            </Footer>
            <GotoButton></GotoButton>
        </>
    );
}