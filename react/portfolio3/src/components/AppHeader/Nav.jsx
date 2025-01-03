import { useState } from "react";

export default function Nav() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navList = [
    {
      "title":"Home",
      "href" : "#home"
    },
    {
      "title":"About",
      "href": "#about"
    },
    {
      "title":"Skills",
      "href":"#skill"
    },
    {
      "title":"My work",
      "href":"#work"
    },
    {
      "title":"Testimonial",
      "href":"#testimonial"
    },
    {
      "title":"Contact",
      "href":"#contact"
    },
  ]
  const handleMenu = (index) => {
    setSelectedIndex(index);
  };
return (
    <nav className="pc_menu">
    <ul className="header__menu">
      {navList.map((item, index) =>      
       <li key={index}><a className={`header__menu__item ${selectedIndex === index ? "active" : ""}`} href={item.href}
        onClick={() => handleMenu(index)}
       >{item.title}</a></li>
    )}

    </ul>
  </nav>
    );
};