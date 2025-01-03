import HeaderLogo from "./HaederLogo";
import Nav from "./Nav";
import ReactBtn from "./ReactBtn";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태 관리

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev); // 상태를 토글하여 메뉴 열고 닫기
  };

  return (
    <header className="header">
      <HeaderLogo />
      <Nav />
      <ReactBtn toggleMenu={toggleMobileMenu} isActive={isMenuOpen} />

      <nav
        id="myNav"
        className="mobile_menu"
        style={{
          width: isMenuOpen ? "105%" : "0", // 상태에 따라 메뉴 너비 변경
          transition: "width 0.1s ease", // 부드러운 전환
        }}
      >
        <div className="overlay-content">
          <ul>
            <li><a href="#">회사소개</a></li>
            <li><a href="#">레퍼런스</a></li>
            <li><a href="#">스튜디오</a></li>
            <li><a href="#">Q &amp; A</a></li>
            <li><a href="#">문의사항</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}