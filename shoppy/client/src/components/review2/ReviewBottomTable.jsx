import StarRating from "./StarRating";

export default function ReviewBottomTable({reviewBottomList, ref}) {

return (
<table className="review-table" ref={ref}>
            <colgroup>
                <col style={{"width": "160px"}}></col>
                <col style={{"width": "auto"}}></col>
            </colgroup>
            <tbody className="review-table-tbody">
                    {reviewBottomList.map((review, index) => (
                            <tr key={index}>
                                <td>
                                <div className="pdt_review_align_wrap">
                                    <div className="pdt_review_valign">
                                    <StarRating totalRate = {4.2} className = "star-coral"/>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <div className="pdt_review_info">
                                    <div className="product_review_info_left">
                                    <div className="pdt_review_option">
                                        <p>
                                        <span>구매옵션 : {review.purchaseOption}</span>
                                        </p>
                                        <p>
                                        <span>사이즈정보 : {review.sizeInfo}</span>
                                        </p>
                                    </div>
                                    </div>
                                    <p className="product_review_info_right">
                                    <em>{review.userInfo.nickname}</em>
                                    <span>{review.userInfo.date}</span>
                                    </p>
                                </div>
                                <ul className="product_review_evaluation">
                                    {review.evaluations.map((evaluation, idx) => (
                                    <li key={idx}>
                                        <div>
                                        <strong>{evaluation.category}</strong>
                                        <em>{evaluation.result}</em>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                                <ul className="pdt_review_photo">
                                    {review.photos.map((photo, idx) => (
                                    <li key={idx} className="open-layer open-pop_photoDetail">
                                        <img src={photo} alt={`Review photo ${idx + 1}`} />
                                    </li>
                                    ))}
                                </ul>
                                <div className="pdt_review_detail">
                                    <p className="pdt_review_text">{review.reviewText}</p>
                                </div>
                                <div className="product_review_reaction">
                                    <div className="btn_report_item">
                                    {review.reactions.reportAvailable && (
                                        <button type="button" className="link_txt open-layer open-pop_review_report">
                                        <span>신고</span>
                                        </button>
                                    )}
                                    {review.reactions.hideAvailable && (
                                        <button type="button" className="link_txt btn_review_hide">
                                        <span>숨김</span>
                                        </button>
                                    )}
                                    </div>
                                    <button type="button" className="like btn_review_recommend">
                                    <span>0</span>
                                    </button>
                                </div>
                                </td>
                            </tr>
                        ))}
    
                            
            </tbody>
        </table>
    );
};