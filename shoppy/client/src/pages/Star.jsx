import React, { useState } from "react";
import StarRating from "../components/review2/StarRating";

export default function Star() {
  const [rates, setRates] = useState([4, 3, 5, 5, 5]); // 각 StarRating 컴포넌트의 totalRate 값 관리

  // 합산된 평점 계산
  const totalRateSum = rates.reduce((acc, rate) => acc + rate, 0);
  const totalRateAvg = totalRateSum / rates.length;

  return (
    <div>
      {rates.map((rate, index) => (
        <StarRating key={index} totalRate={rate}></StarRating>
      ))}

      <span>평점 : {totalRateAvg}</span>
    </div>
  );
}
