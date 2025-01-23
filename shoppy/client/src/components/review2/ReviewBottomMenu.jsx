export default function ReviewBottomMenu({ grandcategory}) {

    const category = (category) => {
        // console.log(category);
        grandcategory(category);
        
    }
return (
        <ul class="pdt_review--sort">
            <li className="divide active">
                <button type="button" onClick={() => category('new')}>최신순</button>
            </li>
            <li className="divide ">
                <button type="button" onClick={() => category('high')}>평점 높은순</button>
            </li>
            <li className="divide ">
                <button type="button" onClick={() => category('low')}>평점 낮은순</button>
            </li>
            <li className="divide ">
                <button type="button" onClick={() => category('recommend')}>추천순</button>
                {/* <div class="recommed_tips_wrap">
                    <a class="btn_question recommed_tips"><span class="blind">추천순</span></a>
                    <div class="recommed_tips_box">
                        리뷰 텍스트 및 사진/동영상, 좋아요 수,작성일 등을 점수화하여 정렬됩니다.
                    </div>
                </div> */}
            </li>
        </ul>
    );
};