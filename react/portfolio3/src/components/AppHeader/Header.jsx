import HeaderLogo from "./HaederLogo";
import Nav from "./Nav";
import ReactBtn from "./ReactBtn";


export default function Header(){


    return(
        <header className="header">

        <HeaderLogo></HeaderLogo>
        <Nav></Nav>
        <ReactBtn></ReactBtn>


      </header>
    );
}