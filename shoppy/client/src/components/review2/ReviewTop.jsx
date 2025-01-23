import StarRating from "./StarRating";
import {useState, useEffect} from 'react';
import axios from "axios";

export default function ReviewTop() {
    const [reviewTopList, setReviewTopList] = useState([]);
    useEffect(() => {
        axios.get('../../data/review2topList.json')
        .then((res) => {
            setReviewTopList(res.data);
            
        }).catch((error) => {
            console.log(error);
            
        })
    }, [])



return (
    <>
        <div className="pdt_review--summary">
            <h4>상품 만족도 <span>(2)</span></h4>
            
            <div class="pdt_review--grade clearfix">
                    <div class="pull-left">
                        <p class="pdt_review--desc">구매하신 분들의 상품에 대한 평점입니다.</p>
                        <StarRating totalRate = {4.2} className = "star-coral"/>
                    </div>
                    <div class="pdt_review--scores pull-right">
                            {reviewTopList.map((category, index) => (
                                <div class="pdt_review--score" key={index}>
                                    <h5>{category.category}</h5>
                                    {category.items.map((item, idx) => (
                                        <div
                                        class={`pdt_review--per ${item.highlight ? "highlight" : ""}`}
                                        key={idx}
                                        >
                                        <strong>{item.name}</strong>
                                        <div class="pdt_review--bar">
                                            <span style={{ width: `${item.percentage}%` }}></span>
                                        </div>
                                        <em>{item.percentage}%</em>
                                        </div>
                                    ))}
                                </div>
                            ))}
                    </div>
                               
                        </div>
                </div>
    </>

    );
};