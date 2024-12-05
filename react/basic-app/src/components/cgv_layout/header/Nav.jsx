import NavMenu from "./NavMenu.jsx";

export default function Nav(){
    const list =[
        {
            "href": "#",
            "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png",
            "name": "로그인"
        },
        {
            "href": "#",
            "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png",
            "name": "회원가입"
        },
        {
            "href": "#",
            "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png",
            "name": "My CGV"
        },
        {
            "href": "#",
            "src":"https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png",
            "name": "고객센터"
        },
    ];

    return (
        <nav>
            <ul>
                {list.map((menu, index) => (
                     <li key={index}>
                        <NavMenu href={menu.href} src={menu.src} name={menu.name}/>
                     </li> 
                ))}
            </ul>
        </nav>
    );
}