import React from "react";

const Pagination = ({ totalPages, page, setPage }) => {
  const itemsPerPage = 5; // 한 번에 보여줄 버튼 수
  // const totalGroups = Math.ceil(totalPages / itemsPerPage); // 전체 그룹 수 ex) totalPages = 12이면 totalGroups = 3 (12 ÷ 5 = 2.4 → 올림하여 3). 없어도 된다.
  const currentGroup = Math.floor((page - 1) / itemsPerPage); // 현재 페이지 그룹 계산 ex) page = 6이면 currentGroup = 1 ((6 - 1) ÷ 5 = 1).
  // 1페이지부터 5페이지까지는 그룹 0, 6페이지부터 10페이지까지는 그룹 1, 11페이지부터 15페이지까지는 그룹 3 ...

  const startPage = currentGroup * itemsPerPage + 1; //currentGroup이 1이면 1 * 5 + 1 = 6 , 6페이지부터 스타트
  const endPage = Math.min((currentGroup + 1) * itemsPerPage, totalPages);
//  endPage: 현재 그룹의 마지막 페이지를 계산.
//  Math.min을 사용하여 총 페이지(totalPages)를 초과하지 않도록 제한.
//  예: currentGroup = 1, totalPages = 12이면 endPage = 10 (2 × 5 = 10).

  const handleFirst = () => {
    setPage(1);
  };

  const handleLast = () => {
    setPage(totalPages);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePageNum = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <ul className="pagination">
      <li>
        <button type="button" onClick={handleFirst} disabled={page === 1}> {/** 페이지가 1인 경우 disabled 속성을 추가하여 버튼 비활성화.*/}
          처음
        </button>
      </li>
      <li>
        <button type="button" onClick={handlePrev} disabled={page === 1}>
          이전
        </button>
      </li>
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNum) => (
        <li
          key={pageNum}
          className={pageNum === page ? "qna-paginate-li-border" : ""}
          onClick={() => handlePageNum(pageNum)}
        >
          {pageNum}
        </li>
      ))}
      <li>
        <button type="button" onClick={handleNext} disabled={page === totalPages}> {/** 페이지가 마지막인 경우 disabled 속성을 추가하여 버튼 비활성화.*/}
          다음
        </button>
      </li>
      <li>
        <button type="button" onClick={handleLast} disabled={page === totalPages}>
          마지막
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

// Array.from({ length: endPage - startPage + 1  얼만큼 나타내줄 거냐 - (ex 무조건 5개씩)}, (_, i) => startPage + i)
// { length: endPage - startPage + 1 }
// 이 객체는 length 속성을 가진 단순한 객체다.
// Array.from은 이 length 값만큼의 빈 배열을 생성한다.
// 예를 들어, length: 5라면 [undefined, undefined, undefined, undefined, undefined]라는 배열을 만든다.


// 2. (_, i)
// Array.from의 두 번째 인자로 들어가는 콜백 함수(매핑함수)
// 콜백 함수는 배열의 각 요소를 생성하기 위해 호출된다.
// (_, i)에서:
// _는 현재 요소의 값이다. (여기서는 필요 없어서 무시하므로 _로 표기)
// i는 현재 인덱스
// 예를 들어, 배열의 첫 번째 요소에서 i = 0, 두 번째 요소에서 i = 1이 된다.
// 3. startPage + i
// startPage부터 시작해서 인덱스 i를 더해준다.
// 예를 들어, startPage = 6이고 i = 0이면 6 + 0 = 6.
// i = 1이면 6 + 1 = 7이고, 이렇게 숫자 배열을 만든다.

// length를 이용해 빈 배열 생성

// endPage - startPage + 1은 우리가 생성하려는 페이지 수를 나타낸다.
// 예: startPage = 6, endPage = 10이면 endPage - startPage + 1 = 5.
// 각 요소를 startPage + i로 변환

// 인덱스(i)를 기반으로 시작 숫자(startPage)부터 1씩 증가하는 숫자를 생성한다.
// 예: startPage = 6, endPage = 10일 때, Array.from은 [6, 7, 8, 9, 10]을 만든다.

// Array.from으로 생성된 배열([6, 7, 8, 9, 10])의 각 숫자를 <li> 태그로 변환한다..