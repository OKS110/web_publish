import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ProfileIcon from './ProfileIcon.jsx';
import Nav from "./Nav.jsx";
import { useEffect, useState } from 'react';

export default function Header() {
    const [profileIcon, setProfileIcon] = useState({});
    const [navList, setNavList] = useState([]);
    useEffect(() => {
        fetch('/data/portfolio.json')
        .then(data => data.json())
        .then(jsonData => {
            setProfileIcon(jsonData.Header[0].profileIcon);
            setNavList(jsonData.Header[1].navList);

        })
        .catch(error => console.log(error))
    },[]);

    
console.log(navList);




return (
    <header  className="header">
        <ProfileIcon img={profileIcon.img} name={profileIcon.name}></ProfileIcon>

        <Nav navList= {navList}></Nav>

        <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
            <FontAwesomeIcon icon={faBars} />
        </button>
    </header>
    );
};