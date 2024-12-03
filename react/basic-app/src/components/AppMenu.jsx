import Menu from "./Menu.jsx";
import MenuList from "./MenuList.jsx";

export default function AppMenu(){
    const list = [
        {
          "name": "Home",
          "href": "#home",
          "bg": "red",
          "color": "white",
        },
        {
          "name": "About",
          "href": "#about",
          "bg": "orange",

        },
        {
          "name": "Skills",
          "href": "#skills",
          "bg": "yellow",

        },
        {
          "name": "Mywork",
          "href": "#mywork",
          "bg": "green",

        },
        {
          "name": "Testimonial",
          "href": "#testimonial",
          "bg": "blue",

        },
        {
          "name": "Contact",
          "href": "#contact",
          "bg": "navy",

        },
        {
          "name": "Support",
          "href": "#support",
          "bg": "purple",

        },
      ]
    return (
        <div>
            <div>
            <Menu name="Home" href="#home" bg="gray" color="white"/>
            <Menu name="About" href="#about" bg="tomato"/>
            <Menu name="Skills" href="#skills" bg="tomato"/>
            <Menu name="Mywork" href="#mywork" bg="tomato"/>
            <Menu name="Testimonial" href="#testimonial" bg="tomato"/>
            <Menu name="Contact" href="#contact" bg="tomato"/>
            <Menu name="Support" href="#support" bg="tomato"/>
            </div>
            <div>
            <MenuList list={list}></MenuList>
            </div>
        </div>
        
    );

}