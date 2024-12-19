export default function Nav() {
    const navList = [
        {
            "name": "Home",
            "href": "#home",
            "active": true
        },
        {
            "name": "About",
            "href": "#about"
        },
        {
            "name": "Skills",
            "href": "#skill"
        },
        {
            "name": "My work",
            "href": "#work"
        },
        {
            "name": "Testimonial",
            "href": "#testimonial"
        },
        {
            "name": "Contact",
            "href": "#contact"
        },
    ];

return (
    <nav>
      <ul className="header__menu">
        {navList.map((item, index) => {
            if(index === 0){
                return <li key={index}><a className= "header__menu__item active"href={item.href}>{item.name}</a></li>
            }else{
                return <li key={index}><a className= "header__menu__item"href={item.href}>{item.name}</a></li>
            } 
        })}
      </ul>
    </nav>
    );
};