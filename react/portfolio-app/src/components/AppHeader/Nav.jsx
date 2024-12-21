import { useState } from "react";

export default function Nav({navList}) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleMenuClick = (index) => {
        setSelectedIndex(index);
    };

    
return (
    <nav className="pc-menu">
      <ul className="header__menu">
        {navList.map((item, index) => {
                return <li key={index}><a className= {`header__menu__item ${selectedIndex === index ? "active" : ""}`}
                href={item.href}
                 onClick={() => handleMenuClick(index)}>{item.name}</a></li>

        })}
      </ul>
    </nav>
    );
};