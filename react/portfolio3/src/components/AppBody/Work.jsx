import { useEffect, useState } from "react";
import WorkMenu from "./WorkMenu";
import WorkProjects from "./WorkProjects";

export default function Work({work}){
    const [type, setType] = useState('All');
    const [filteredItems, setFilteredItems] = useState([]);
    const [menuList, setMenuList] = useState([]);

      // 초기 필터링 처리 - 처음부터 All 카테고리에 해당하는 모든 project들이 나옴.
      useEffect(() => {
        if (work && work.workProjectsList && work.workMenuList) {
          // 초기 필터링 설정
          setFilteredItems(filterItems("All"));
    
          // 메뉴 카운트 계산
          const menuCounts = work.workMenuList.map((menu) => {
            return {...menu,
            menuCnt:
              menu.menuTitle === "All"
                ? work.workProjectsList.length
                : work.workProjectsList.filter((item) => item.category === menu.menuTitle).length}
          });
          setMenuList(menuCounts);
        }
      }, [work]);


    const filterItems = (type) => {
        if (!work || !work.workProjectsList) return [];
        if (type === 'All') {
          return work.workProjectsList; // 모든 항목 반환
        }
        return work.workProjectsList.filter((item) => item.category === type);
      };
    const handleTypeChange = (type) => {
        setType(type);
        setFilteredItems(filterItems(type));
    };




    return(
<section id="work" className="section max-container">    
      <h2 className="title">My work</h2>
      <p className="description">Projects</p>
      <WorkMenu workMenu = {menuList} setType = {handleTypeChange}></WorkMenu>
      <WorkProjects workProjects = {filteredItems}></WorkProjects>
    </section>

    );
}