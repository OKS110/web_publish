import React, { useState } from 'react';
import Category from './Category.jsx';

export default function Categories() {
    const [selected, setSelected] = useState("All");

    const categoryList = [
        {
            "name": "All",
            "count": 8
        },
        {
            "name": "Front-end",
            "count": 4
        },
        {
            "name": "Back-end",
            "count": 2
        },
        {
            "name": "Mobile",
            "count": 2
        },
    ];

    const click = (name) => {
        
        setSelected(name);
    };
    return (
        <ul class="categories">
            {categoryList && categoryList.map((category, index) =>  
                <li key={index}>
                    <Category 
                            name={category.name}
                            count={category.count}
                            index = {index}
                            selected={selected}
                            click={click} />


                </li>
            )}
        </ul>
    );
}

