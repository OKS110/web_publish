import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ProfileIcon from './ProfileIcon.jsx';
import Nav from "./Nav.jsx";

export default function Header() {
    const profileIcon = {
        "img" : "/data/images/favicon.ico",
        "name" : "Judy"
    }


return (
    <header  className="header">
        <ProfileIcon img={profileIcon.img} name={profileIcon.name}></ProfileIcon>

        <Nav></Nav>

        <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
            <FontAwesomeIcon icon={faBars} />
        </button>
    </header>
    );
};