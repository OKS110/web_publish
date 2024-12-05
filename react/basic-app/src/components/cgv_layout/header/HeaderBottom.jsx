import HeaderBottomSearch from "./HeaderBottomSearch.jsx";
import HeaderBottomMenu from "./HeaderBottomMenu.jsx";

export default function HeaderBottom(){
    const names = [
        {
            "name": "영화",
        },
        {
            "name": "극장",
        },
        {
            "name": "예매",
        },
        {
            "name": "스토어",
        },
        {
            "name": "이벤트",
        },
        {
            "name": "혜택",
        }
    ];

    return(
        <div class="bottom-wrap">
            <div class="header-bottom">
            
                <ul>
                    {names.map((item, index) =>
                    <li key={index}>
                        <HeaderBottomMenu name={item.name}/>
                    </li> )}
                  
                </ul>

                <HeaderBottomSearch />
               
            </div>
        </div>
    );
}