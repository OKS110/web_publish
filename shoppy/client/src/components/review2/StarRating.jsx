import React from "react";
import { TbStarFilled, TbStarHalfFilled, TbStar } from "react-icons/tb";

export default function StarRating({ totalRate, className }) {
  const color = className === "star-coral" ? "coral" : "black";

  // totalRate가 유효한 숫자인지 확인하고, 그렇지 않으면 0으로 설정
  const rate = typeof totalRate === "number" && !isNaN(totalRate) ? totalRate : 0;

  const fillStars = Math.floor(rate);  // 채워진 별 개수
  const halfStar = rate % 1 !== 0;     // 반별 여부
  const emptyStars = 5 - fillStars - (halfStar ? 1 : 0);  // 빈 별 개수

  return (
    <div className="star-rating">
      {/* 채워진 별 */}
      {[...Array(fillStars)].map((_, i) => (
        <span key={`filled-${i}`} className={`${className} ${color}`}>
          <TbStarFilled />
        </span>
      ))}

      {/* 반만 채워진 별 */}
      {halfStar && (
        <span key="half-star" className={`${className} ${color}`}>
          <TbStarHalfFilled />
        </span>
      )}

      {/* 빈 별 */}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="empty-star">
          <TbStar />
        </span>
      ))}

      {/* 점수 표시 (optional) */}
      {className === "star-black-big" && (
        <>
          <span className={`${className} number`}>{rate} /</span>
          <span className={`${className} tot-number`}>5</span>
        </>
      )}
      {className === "star-coral" && (
        <span className={`${className} number`}>{rate}</span>
      )}
    </div>
  );
}
