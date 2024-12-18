import BestBook from "./BestBook.jsx";
import './BestBook.css';
import './Menu.css';
import MenuList from './MenuList.jsx';
import { useEffect, useState } from "react";
// import { useState } from "react";

export default function AppBestSeller() {
    const [menuList, setMenuList]= useState([]);
    const [bookList, setBookList] = useState([]);
    const [category, setCategory] = useState('total');

    useEffect(() => {
        fetch('/data/yes24.json')
        .then(data => data.json())
        .then(jsonData => {
            setMenuList(jsonData.menuList);

            
            if(category !== 'total'){
                const filterObj = jsonData.bookList.filter((item) => {
                    return item.category === category;
                });
                setBookList(filterObj);
            }else if(category === 'total'){
                setBookList(jsonData.bookList);
            }
        })
        .catch(error=> console.log(error))
    }, [category]);


    //메뉴 클릭 시 카테고리 전달받아옴
    const handleMenuClickReq2 = (category) => {
        setCategory(category);

    };
    console.log(`category --> ${category}`);
    

return (
    <div className="container">
        <MenuList list={menuList} click={handleMenuClickReq2}></MenuList>
        <BestBook bookList = {bookList}></BestBook>
    </div>
);
};