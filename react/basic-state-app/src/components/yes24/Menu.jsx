
export default function Menu({name, href, bg, color, category, click}){
    
    const handleClickMenu = (e) => {
        e.preventDefault();
        click(category);
    };

    return (
        <a href={href} className="menu-item" style={{backgroundColor: bg, color: color}}
        onClick={handleClickMenu}>{name}</a>
    );
}