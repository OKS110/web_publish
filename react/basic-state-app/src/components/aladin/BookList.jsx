import { useEffect, useState } from "react";
import Book from "./Book";
import Radio from "./Radio";
import Select from "./Select";
export default function BookList() {

    const [books, setBooks] = useState([]);
    const [type, setType] = useState('total');
    const [category, setCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState('');


    useEffect(() => {
        fetch('/data/aladin.json')
            .then((data) => data.json())
            .then((jsonData) => {
                setCategory(jsonData.category); // 카테고리 설정
                
                let filteredBooks = jsonData.books;

                // 필터링 조건
                if (type !== 'total') {
                    filteredBooks = filteredBooks.filter((item) => item.type === type);
                }

                if (selectCategory && selectCategory !== '선택') {
                    filteredBooks = filteredBooks.filter((item) => item.category === selectCategory);
                }
                setBooks(filteredBooks);

                // filteredBooks = (selectCategory && selectCategory !== '선택') 
                // ? filteredBooks.filter((item) => item.category === selectCategory) 
                // : filteredBooks;
            })
            .catch((error) => console.log(error));
    }, [type, selectCategory]);



    const click = (event) => {
        setType(event);
    };

    const handleChangeCategory= (event) => {
        setSelectCategory(event);
    };
return (

    <>
       
        <Radio click={click}></Radio>
        <Select category={category} handleChangeCategory= {handleChangeCategory}></Select>


        <ul style={{display:"grid", listStyle:"none", gridTemplateColumns:"repeat(4, 1fr)"}}>

        {books && books.map((book, index) => 
            <li key={index}>
                <Book img={book.img} title={book.title}></Book>
            </li>
        )}  
        </ul>
    </>

    );
};