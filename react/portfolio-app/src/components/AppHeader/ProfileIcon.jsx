export default function ProfileIcon(props) {
return (
    <div className="header__logo">
      <img className="header__logo__img" src={props.img} alt="logo"/>
      <h1 className="header__logo__title">{props.name}</h1>
    </div>
    );
};