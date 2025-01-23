export default function Pagination({page, totalPages, currentPage,setPage}) {

    const handleFirst = () => {
        setPage(1);
    }
    const handlePrev = () => {
        if (page > 1) {
            setPage(page-1);
        } else {
            setPage(1);
        }
    }
    const handlePageNum = (num) => {
        setPage(num);
        console.log('num --> ', num);
    }
    const handleNext = () => {
        if (page+1 > totalPages) {
            setPage(page);
        } else {
            setPage(page+1)
        }
    }
    const handleLast = () => {
        setPage(totalPages);
    }




return (
    <ul className="page-arrow">
        <li><button type="button" onClick={handleFirst}>처음</button></li>
        <li><button type="button" onClick={handlePrev}>이전</button></li>
        { [...Array(totalPages)].map((item, i) =>
                <>
                    {currentPage + i <= totalPages && (
                        <li className={ currentPage+i === page ? 'qna-paginate-li-border' : ''} 
                            onClick={() => {handlePageNum(currentPage+i)}}>
                            {currentPage+i}
                        </li>
                    )}
                </>
            )}
        <li><button type="button" onClick={handleNext}>다음</button></li>
        <li><button type="button" onClick={handleLast}>마지막</button></li>
    </ul>
    );
};