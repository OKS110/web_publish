import { useState, useEffect } from "react";
import axios from 'axios';
import ProductAvata from "./ProductAvata";
export default function ProductList() {
    const [list, setList] = useState([]);

    useEffect(() =>{
        // fetch('data/products.json')
        // .then(data => data.json())
        // .then(jsonData => setList(jsonData))
        // .catch(err => console.log(err))
        axios.get('data/products.json')
        .then(res => {setList(res.data)
            console.log(res);
            console.log(res.data);

        })
        .catch(err => console.log(err));
    }, []);

    
    
const rows = [];
for(let i = 0; i<list.length; i+=3){ //  0, 3, 6
    rows.push(list.slice(i, i+3)); //  0, 1, 2  |   3, 4, 5   | 6
};
//rows = [[0, 1, 2], [3, 4, 5], [6]]
return (
    // <div className="product-list">
    //     {list && list.map((item) => 
    //         <ProductAvata img={item.image}/>
    //     )}
    // </div>
    <div>
        {rows && rows.map((rowArray, index) => 
            <div className="product-list" key={index}>
                {
                     rowArray.map((item, index) => <ProductAvata img={item.image} key={index}></ProductAvata>)
                }  
            </div>
        )}

    </div>
    );
};