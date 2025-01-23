import React from "react";

const Pagination = ({ totalPages, page, setPage }) => {
  const itemsPerPage = 5; // 한 번에 보여줄 페이지 수
  const totalGroups = Math.ceil(totalPages / itemsPerPage); // 전체 그룹 수
  const currentGroup = Math.floor((page - 1) / itemsPerPage); // 현재 페이지 그룹 계산

  const startPage = currentGroup * itemsPerPage + 1;
  const endPage = Math.min((currentGroup + 1) * itemsPerPage, totalPages);

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
        <button type="button" onClick={handleFirst} disabled={page === 1}>
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
        <button type="button" onClick={handleNext} disabled={page === totalPages}>
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
