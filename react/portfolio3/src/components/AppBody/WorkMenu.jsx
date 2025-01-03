import { useState } from "react";

export default function WorkMenu({workMenu, setType}) {
  const [selectedCnt, setSelectedCnt] = useState(0);

  const handleMenu = (index, type) => {
    setSelectedCnt(index);
    setType(type);
    console.log(type);
    
  };
return (
<ul className="categories">
      {workMenu&& workMenu.map((item, index) => 
       <li key={index}><button className={`category ${selectedCnt === index? "category--selected": ""}`} 
       onClick={() => handleMenu(index, item.menuTitle)}>{item.menuTitle}<span className="category__count">{item.menuCnt}</span></button></li>
      )}
</ul>
    );
};