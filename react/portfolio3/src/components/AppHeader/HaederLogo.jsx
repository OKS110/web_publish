export default function HeaderLogo() {

  const headerLogo = {
    "img": "images/favicon.ico",
    "name": "Judy" 
  };


return (
        <a className="header__logo" href="#home">
          <img className="header__logo__img" src={headerLogo.img} alt="logo"/>
          <h1 className="header__logo__title">{headerLogo.name}</h1>
        </a>
    );
};