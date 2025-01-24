import StarRating from "./StarRating";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageList from "./ImgList";

export default function ReviewTop() {
  const [reviewTopList, setReviewTopList] = useState([]);

  useEffect(() => {
    axios
      .get("../../data/review2topList.json")
      .then((res) => {
        setReviewTopList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const imgList = [
    "http://qhdrus123.cafe24.com/web/24fall/Cashmere%20Balmacaan%20Coat_black/15.jpg",
    "http://qhdrus123.cafe24.com/web/24fall/Cashmere%20Balmacaan%20Coat_black/15.jpg",
    "http://qhdrus123.cafe24.com/web/24fall/Cashmere%20Balmacaan%20Coat_black/15.jpg",
    "http://qhdrus123.cafe24.com/web/24fall/Cashmere%20Balmacaan%20Coat_black/15.jpg",
    "http://qhdrus123.cafe24.com/web/24fall/Cashmere%20Balmacaan%20Coat_black/15.jpg",
    "http://qhdrus123.cafe24.com/web/24fall/Cashmere%20Balmacaan%20Coat_black/15.jpg",
    "http://qhdrus123.cafe24.com/web/24fall/Cashmere%20Balmacaan%20Coat_black/15.jpg"

  ]

  

  return (
    <>
      <div className="pdt_review--summary">
        <h4>
          상품 만족도 <span>(2)</span>
        </h4>

        <div className="pdt_review--grade clearfix">
          <div className="pull-left">
            <p className="pdt_review--desc">구매하신 분들의 상품에 대한 평점입니다.</p>
            <StarRating totalRate={4.2} className="star-coral" />
          </div>
          <div className="pdt_review--scores pull-right">
            {reviewTopList.map((category, index) => (
              <div className="pdt_review--score" key={index}>
                <h5>{category.category}</h5>
                {category.items.map((item, idx) => (
                  <div
                    className={`pdt_review--per ${item.highlight ? "highlight" : ""}`}
                    key={idx}
                  >
                    <strong>{item.name}</strong>
                    <div className="pdt_review--bar">
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
      <ImageList imgList={imgList} className="review-top-imglist" />
    </>
  );
}
