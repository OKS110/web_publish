import '../css/Menu.css';

export default function Menu({name, href, bg, color}){
    console.log({href});
    
    return (
        <a href={href} className="menu-item" style={{backgroundColor: bg, color: color}}>{name}</a>
    );
}