import { useState, useEffect } from "react";
import WorkMenu from './WorkMenu.jsx';
import WorkMenuItems from './WorkMenuItems.jsx';

export default function Work({ work }) {
  const [type, setType] = useState('All'); // 기본 카테고리
  const [filteredItems, setFilteredItems] = useState([]);
  const [updatedMenuList, setUpdatedMenuList] = useState([]);

  // 필터링 로직
  const filterItems = (type) => {
    if (!work || !work.workMenuItemList) return [];
    if (type === 'All') {
      return work.workMenuItemList; // 모든 항목 반환
    }
    return work.workMenuItemList.filter((item) => item.category === type);
  };

  // 카테고리 변경 시 필터링 처리
  const handleTypeChange = (type) => {
    setType(type);
    setFilteredItems(filterItems(type));
  };

  // 카테고리별 개수 계산
  useEffect(() => {
    if (work && work.workMenuList && work.workMenuItemList) {
      const menuWithCounts = work.workMenuList.map((menu) => ({
        ...menu, categoryCount:
          menu.category === 'All'
            ? work.workMenuItemList.length // 전체 개수
            : work.workMenuItemList.filter((item) => item.category === menu.category).length // 특정 카테고리 개수
      }));
      setUpdatedMenuList(menuWithCounts);
    }
  }, [work]);

  if (!work || !work.workMenuItemList) {
    return <div>Loading...</div>;
  }

  return (
    <section id="work" className="section max-container">
      <h2 className="title">My work</h2>
      <p className="description">Projects</p>
      <WorkMenu workMenuList={updatedMenuList} selectType={handleTypeChange} />
      <WorkMenuItems workMenuItemList={filteredItems} />
    </section>
  );
}
