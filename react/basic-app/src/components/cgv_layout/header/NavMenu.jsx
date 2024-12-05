
export default function NavMenu({href, src, name}){


    return (
        <a href={href} target="_parent" className="header-menu-icon"><img src={src} alt=""></img>{name}</a>
    );
}