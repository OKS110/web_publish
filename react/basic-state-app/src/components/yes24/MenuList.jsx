import Menu from "./Menu.jsx";

export default function MenuList({list, click}){
    const handleMenuClickReq = (category) => {
        click(category);
    };

    return(
        <ul className="menu-container">
            {list && list.map((item, index) => 
            <li key={index}><Menu name={item.name} href={item.href} bg={item.bg} color={item.color} category={item.category}
                click={handleMenuClickReq}
            ></Menu></li>)}
        </ul>
    );
}