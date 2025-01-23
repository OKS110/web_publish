import { useEffect, useState, useRef } from "react";

import axios from "axios";
import ReviewBottomMenu from "./ReviewBottomMenu";
import ReviewBottomTable from "./ReviewBottomTable";
import Pagination from "./Pagination";

export default function ReviewBottom() {
    const [data, setData] = useState([]); // 데이터 관리
    const [type, setType] = useState('all');

    // const [reviewBottomList, setReviewBottomList] = useState([]);

    useEffect(() => {
        axios.get('../../data/review2bottomList.json')
        .then((res) => {
            if(type === 'all') setData(res.data);
            else{
                let reviewData = res.data.filter((item)=>item.type === type  ) ; 
                setData(reviewData);
                setPage(1); //// type이 변경되면 페이지를 1로 초기화
            }
        })
    }, [type])
    const grandcategory = (type) => {
        setType(type);
    }
   // pagination
   const [page, setPage] = useState(1); // 페이지 관리(시작 페이지)
   const itemsPerPage = 6; // 한 페이지에 보여줄 데이터 갯수
   const totalItem = data.length; // 데이터 총 갯수
   const totalPages = Math.ceil(totalItem / itemsPerPage); // 총 페이지 갯수 계산
   const currentPage = 1;
   const [sliceData, setSliceData] = useState([]); // 현재 페이지에서 보여줄 리스트(slice)
   // 리스트 slice 범위
   const endIdx = (page * itemsPerPage); 
   const startIdx = endIdx - itemsPerPage;


   /** sliceData 관리 :: 페이지 변경 or 리스트 변동 시 출력 데이터 재정의 **/ 
   useEffect(() => {
       setSliceData(data.slice(startIdx, endIdx)); //6개씩 쪼개짐
   }, [page, data]);

//    pagination을 누르면 리뷰 첫 번째 리스트로 이동
   const tableRef = useRef(null); // ReviewBottomTable의 스크롤 위치 참조
   useEffect(() => {
       if (tableRef.current) {
           window.scrollTo({
               top: tableRef.current.offsetTop - "25", // 테이블 위치로 스크롤
               behavior: "smooth", // 부드럽게 이동
           });
       }
   }, [page]);


return (
    <div className="review-bottom">
        <ReviewBottomMenu  grandcategory= {grandcategory}></ReviewBottomMenu>

        <ReviewBottomTable reviewBottomList = {sliceData} ref={tableRef}></ReviewBottomTable>

        <Pagination page={page} 
                    totalPages={totalPages}
                    currentPage={currentPage} 
                    setPage={setPage}/>

    </div>
    );
};