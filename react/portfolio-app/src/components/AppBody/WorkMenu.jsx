import { useState } from "react";

export default function WorkMenu({ workMenuList, selectType }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMouseClick = (index, type) => {
    setSelectedIndex(index);
    selectType(type); // 상위 컴포넌트로 선택된 type 전달
  };

  return (
    <ul className="categories">
      {workMenuList.map((item, index) => (
        <li key={index}>
          <button
            className={`category ${selectedIndex === index ? "category--selected" : ""}`}
            onClick={() => handleMouseClick(index, item.category)}
          >
            {item.category}
            <span className="category__count">{item.categoryCount}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
