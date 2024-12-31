export default function HeaderLogo() {

  const headerLogo = {
    "img": "images/favicon.ico",
    "name": "Judy" 
  };


return (
        <a class="header__logo" href="#home">
          <img class="header__logo__img" src={headerLogo.img} alt="logo"/>
          <h1 class="header__logo__title">{headerLogo.name}</h1>
        </a>
    );
};