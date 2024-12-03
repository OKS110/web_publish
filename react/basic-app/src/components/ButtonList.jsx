import Button from "./Button.jsx";

export default function ButtonList({list}){
    return (
        <ul>
            {list.map((item, index) => <li key={index}><Button name={item.name} type={item.type}></Button></li>)}
        </ul>
    );
}