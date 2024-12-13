import { useEffect, useState } from "react";
import Book from "../aladin/Book.jsx";

export default function BookList2() {
    const [books, setBooks] = useState([]);
    const [type, setType] = useState('total');
    const [select, setSelect] = useState([]);
    const [selectType, setSelectType] = useState('선택');


    useEffect(() => {
        fetch('/data/aladin.json')
        .then(data => data.json())
        .then(jsonData =>{
            setSelect(jsonData.category);

            let filteredBooks = jsonData.books;
                if(type !== "total"){
                    filteredBooks = filteredBooks.filter((item) => item.type === type);
                }

                if(selectType !== '선택'){
                    filteredBooks = filteredBooks.filter((item) => item.category === selectType);
                }
                setBooks(filteredBooks);

        })
        .catch(error => console.log(error))
    }, [type, selectType]);

    const radioClick = (event) => {
        setType(event.target.value);
    };
    const selectClick = (event) => {
        setSelectType(event.target.value);
    };  
    console.log(select);
    
return (
    <>
    <div>
        <select onChange={selectClick}>
            <option value="선택">선택</option>

            {select && select.map((item) =>
              <option value={item.name}>{item.name}</option>
            )}
        </select>
    </div>


    <div>
        [{type}]
        <input type="radio" name="type" value ="total" onClick={radioClick}/>전체도서
        <input type="radio" name="type" value= "domestic" onClick={radioClick}/>국내도서
        <input type="radio" name="type" value= "overseas" onClick={radioClick}/>국외도서
    </div>

    <ul style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", listStyle: "none"}}>
        {books.map((item, index) => 
            <li key={index}>
                <Book img={item.img} title={item.title}></Book>
            </li>
        )}

    </ul>
    </>



    );
};