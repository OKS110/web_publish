import Header from "./Header.jsx";
import AvatarImage from '../components/AvatarImage.jsx';
import AvatarList from '../components/AvatarList.jsx';
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import './Header.css'
import Button from '../components/Button.jsx';
import Menu from '../components/Menu.jsx';
import ButtonList from '../components/ButtonList.jsx';
export default function AppLayout(){
    const avatarList = [
        { "img": "/images/people1.webp", "name": "smith"},
        { "img": "/images/people2.webp", "name": "james"},
        { "img": "/images/people3.webp", "name": "susan"},
    ];

    const buttonList = [
        {"name": "회원가입", "type": "button"},
        {"name": "Support", "type": "button"},
        {"name": "MyPage", "type": "button"},
    ];
    
    return(
        <>
        <Header>
            <AvatarImage img="/images/people1.webp"/>
            <Button name="Login" type="button"/>
            <Menu name="Home" href="#home" bg="gray" color="white"/>
        </Header>
        <Body>
            <AvatarList list={avatarList}></AvatarList>
        </Body>
        <Footer>
            <ButtonList list={buttonList}/>
        </Footer>
        </>
        
    );
}