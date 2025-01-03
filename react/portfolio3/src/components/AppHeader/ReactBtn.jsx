export default function ReactBtn({ toggleMenu, isActive }) {
    return (
      <button
        id="menu_toggle"
        className={`toggle-container header__toggle ${isActive ? "active" : ""}`} // 상태에 따라 클래스 추가
        onClick={toggleMenu} // 부모에서 전달된 핸들러 실행
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </button>
    );
  }
  