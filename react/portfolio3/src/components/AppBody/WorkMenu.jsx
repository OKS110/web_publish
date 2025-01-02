import { useState } from "react";

export default function WorkMenu({workMenu}) {
  const [selectedCnt, setSelectedCnt] = useState(0);

  const handleMenu = (index) => {
    setSelectedCnt(index);
  };
return (
<ul className="categories">
      {workMenu&& workMenu.map((item, index) => 
       <li key={index}><button className={`category ${selectedCnt === index? "category--selected": ""}`} 
       onClick={() => handleMenu(index)}>{item.menuTitle}<span className="category__count">{item.menuCnt}</span></button></li>
      )}
</ul>
    );
};