show databases;
use myshop2019;
select database();
show tables;

/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from customer;
desc customer;
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from employee;
desc employee;
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from product;
desc product;

-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.

select * from order_header;
desc order_header;
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_detail;
desc order_detail;
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
select customer_id, customer_name, city, gender, email, phone from customer;
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
select employee_name, employee_id, gender, hire_date, phone from employee;
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
	from customer where customer_name = '홍길동';
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
	from customer where gender = "f";
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point
	from customer where city = '울산';
-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point 
	from customer where point >= 500000;
-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where customer_name like '% %';
-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where phone not like '010%';
-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where point >= 500000 and city = '서울';
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where point >= 500000 and not city = '서울';
-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where point >= 400000 and city = '서울' and gender = 'm';
-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where city in ('강릉', '원주');
-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where city in ('서울', '부산', '제주', '인천');
-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where point between 399999 and 500001;
-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, birth_date, point from customer where substring(birth_date, 1, 4) = 1990;
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, birth_date, point from customer where left(birth_date, 4) = 1990 and gender = 'f'; 
-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, birth_date, phone, point 
	from customer 
    where substring(birth_date, 1, 4) = 1990 and city in ('대구', '경주') and gender = 'm'; 
-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
	select concat(customer_name, '(', customer_id, ')'), gender, city, birth_date, phone, point from customer 
		where substring(birth_date, 1, 4) = 1990 and gender = 'm';

-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date from employee where retire_date is null;
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date from employee where gender = 'm' and retire_date is null;
-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date from employee where retire_date is not null;
-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
    show tables;
    select * from order_header;
    select order_id, customer_id, employee_id, order_date, sub_total, delivery_fee, total_due from order_header
		where order_date between '2019-01-01' and '2019-01-08' 
		order by customer_id asc;
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
	select order_id, customer_id, employee_id, order_date, sub_total, delivery_fee, total_due from order_header
		where order_date between '2019-01-01' and '2019-01-08'
        order by total_due desc;
-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.
	select order_id, customer_id, employee_id, order_date, sub_total, delivery_fee, total_due from order_header
		where order_date between '2019-01-01' and '2019-01-08' order by employee_id asc, substring(order_date, 9, 2) desc;
/**
	그룹함수
**/
/** customer 테이블 사용 **/
select * from customer;
-- Q01) 고객의 포인트 합을 조회하세요.
select format(sum(point), 0) from customer;
-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.
select city, sum(point) from customer group by city having city = '서울';
-- Q03) '서울' 지역 고객의 수를 조회하세요.
select city, count(*) from customer group by city having city = '서울';
-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
select city, sum(point), avg(point) from customer group by city having city = '서울';
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.
select city, sum(point), avg(point), max(point), min(point) from customer group by city having city = '서울';
-- Q06) 남녀별 고객의 수를 조회하세요.
select gender, count(*) from customer group by gender;

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city, count(*) from customer group by city order by city asc;
 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
   select city, count(*) from customer group by city having count(*) >= 10 order by city asc;
    
-- Q09) 남녀별 포인트 합을 조회하세요.
    select case gender
				when 'f' then '여자'
                else '남자'
			end as 성별, 
		sum(point) 
        from customer 
        group by gender;
/*
	CASE 컬럼명
		WHEN 'F' THEN '여자'
        ELSE '남자'
	END
*/
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city, sum(point) from customer group by city order by city asc;
    
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
select city, sum(point) from customer group by city having sum(point) >= 1000000 order by sum(point) desc;
      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
   select city, sum(point) from customer group by city order by sum(point) desc;

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city, count(*), sum(point) from customer group by city order by city asc;

-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city, sum(point), format(avg(point), 1) from customer where point is not null group by city order by city asc;
-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
select city, gender, sum(point), avg(point) from customer group by city, gender having city in ('서울', '부산', '대구') 
	order by city asc, gender asc;

/** order_header 테이블 사용 **/
    
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.
select * from order_header;
select customer_id, sum(total_due) from order_header where left(order_date, 7) = '2019-01' group by customer_id ;
-- Q17) 주문연도별 전체금액 합계를 조회하세요.
select substring(order_date, 1, 4), sum(total_due) from order_header group by substring(order_date, 1, 4);
-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.
select substring(order_date, 1, 4), substring(order_date, 6, 2), sum(total_due) from order_header 
	where order_date between '2019-01-01' and '2019-06-30'
	group by substring(order_date, 1, 4), substring(order_date, 6, 2);
-- Q19) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.
select substring(order_date, 1, 4), substring(order_date, 6, 2), sum(total_due), avg(total_due) from order_header 
	where order_date between '2019-01-01' and '2019-06-30'
	group by substring(order_date, 1, 4), substring(order_date, 6, 2);
-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.
SELECT 
    IF(GROUPING(year), '총계', IFNULL(year, '-')) AS 연도,
    IF(GROUPING(month), '소계', IFNULL(month, '-')) AS 월,
    SUM(total_due) AS 전체금액합,
    AVG(total_due) AS 평균금액
FROM (
    SELECT 
        LEFT(order_date, 4) AS year,
        SUBSTRING(order_date, 6, 2) AS month,
        total_due
    FROM order_header
) t
GROUP BY year, month WITH ROLLUP;

/**
	테이블 조인
*/
SHOW DATABASES;
USE MYSHOP2019;
SELECT DATABASE();
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문수량, 주문일시, 전체금액을 조회하세요.
	SHOW TABLES;
    SELECT * FROM CUSTOMER;
	SELECT * FROM ORDER_HEADER;
    SELECT OH.ORDER_ID, OH.CUSTOMER_ID, OH.EMPLOYEE_ID, OD.ORDER_QTY, OH.ORDER_DATE, OH.TOTAL_DUE
    FROM ORDER_HEADER OH INNER JOIN ORDER_DETAIL OD
    ON OH.ORDER_ID = OD.ORDER_ID
    WHERE TOTAL_DUE >= 8500000;
    
    SELECT DISTINCT OH.ORDER_ID, OH.CUSTOMER_ID, OH.EMPLOYEE_ID, OD.ORDER_QTY, OH.ORDER_DATE, OH.TOTAL_DUE
    FROM ORDER_DETAIL OD, (
			SELECT ORDER_ID, CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE
            FROM ORDER_HEADER
            WHERE TOTAL_DUE >= 8500000) OH
		WHERE OH.ORDER_ID = OD.ORDER_ID;
-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
	SELECT DISTINCT ORD.ORDER_ID, CUS.CUSTOMER_ID, ORD.EMPLOYEE_ID, ORD.ORDER_DATE, ORD.TOTAL_DUE, CUS.CUSTOMER_NAME 
    FROM ORDER_HEADER ORD, CUSTOMER CUS
    WHERE ORD.CUSTOMER_ID = CUS.CUSTOMER_ID AND TOTAL_DUE >= 8500000;	
-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
SELECT ORD.ORDER_ID, ORD.CUSTOMER_ID, E.EMPLOYEE_ID, ORD.ORDER_DATE, ORD.TOTAL_DUE, E.EMPLOYEE_NAME
FROM ORDER_HEADER ORD INNER JOIN EMPLOYEE E
ON ORD.EMPLOYEE_ID = E.EMPLOYEE_ID
WHERE TOTAL_DUE >= 8500000;
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
SELECT ORD.ORDER_ID, ORD.CUSTOMER_ID, E.EMPLOYEE_ID, ORD.ORDER_DATE, ORD.TOTAL_DUE, C.CUSTOMER_NAME, E.EMPLOYEE_NAME
FROM ORDER_HEADER ORD INNER JOIN EMPLOYEE E INNER JOIN CUSTOMER C
ON ORD.EMPLOYEE_ID = E.EMPLOYEE_ID AND C.CUSTOMER_ID = ORD.CUSTOMER_ID
WHERE TOTAL_DUE >= 8500000; 
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
SELECT ORD.ORDER_ID, ORD.CUSTOMER_ID, E.EMPLOYEE_ID, ORD.ORDER_DATE, ORD.TOTAL_DUE, C.CUSTOMER_NAME, E.EMPLOYEE_NAME, C.CITY
FROM ORDER_HEADER ORD INNER JOIN EMPLOYEE E INNER JOIN CUSTOMER C
ON ORD.EMPLOYEE_ID = E.EMPLOYEE_ID AND C.CUSTOMER_ID = ORD.CUSTOMER_ID
WHERE ORD.TOTAL_DUE >= 8500000 AND C.CITY = '서울'; 
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
SELECT ORD.ORDER_ID, ORD.CUSTOMER_ID, E.EMPLOYEE_ID, ORD.ORDER_DATE, ORD.TOTAL_DUE, C.CUSTOMER_NAME, E.EMPLOYEE_NAME, C.CITY, C.GENDER
FROM ORDER_HEADER ORD INNER JOIN EMPLOYEE E INNER JOIN CUSTOMER C
ON ORD.EMPLOYEE_ID = E.EMPLOYEE_ID AND C.CUSTOMER_ID = ORD.CUSTOMER_ID
WHERE ORD.TOTAL_DUE >= 8500000 AND C.CITY = '서울' AND C.GENDER = 'M'; 
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
SELECT ORDH.ORDER_ID, ORDT.PRODUCT_ID, ORDT.ORDER_QTY, ORDT.UNIT_PRICE, ORDH.TOTAL_DUE 
	FROM ORDER_DETAIL ORDT, ORDER_HEADER ORDH WHERE ORDT.ORDER_ID = ORDH.ORDER_ID AND ORDT.ORDER_QTY >= 30;
-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
SELECT ORDH.ORDER_ID, ORDT.PRODUCT_ID, ORDT.ORDER_QTY, ORDT.UNIT_PRICE, ORDH.TOTAL_DUE, P.PRODUCT_NAME
	FROM ORDER_DETAIL ORDT, ORDER_HEADER ORDH, PRODUCT P WHERE ORDT.ORDER_ID = ORDH.ORDER_ID AND P.PRODUCT_ID = ORDT.PRODUCT_ID
    AND ORDT.ORDER_QTY >= 30;
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
SELECT ORDT.PRODUCT_ID, P.PRODUCT_NAME, P.SUB_CATEGORY_ID
	FROM ORDER_DETAIL ORDT, PRODUCT P, SUB_CATEGORY S WHERE P.PRODUCT_ID = ORDT.PRODUCT_ID 
    AND P.SUB_CATEGORY_ID = S.SUB_CATEGORY_ID;
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
SELECT S.SUB_CATEGORY_NAME, C.CATEGORY_ID
	FROM SUB_CATEGORY S INNER JOIN CATEGORY C ON S.CATEGORY_ID = C.CATEGORY_ID;
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
SELECT P.PRODUCT_NAME FROM EMPLOYEE E INNER JOIN ORDER_HEADER OH INNER JOIN PRODUCT P INNER JOIN ORDER_DETAIL OD 
	ON E.EMPLOYEE_ID = OH.EMPLOYEE_ID AND OH.ORDER_ID = OD.ORDER_ID AND OD.PRODUCT_ID = P.PRODUCT_ID
    WHERE E.EMPLOYEE_NAME = '다정한' AND LEFT(ORDER_DATE, 4) = 2019;
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
    SELECT C.CUSTOMER_ID, E.EMPLOYEE_ID, O.ORDER_ID, O.ORDER_DATE
    FROM CUSTOMER C INNER JOIN EMPLOYEE E INNER JOIN ORDER_HEADER O INNER JOIN ORDER_DETAIL OD INNER JOIN PRODUCT P
    ON C.CUSTOMER_ID = O.CUSTOMER_ID AND E.EMPLOYEE_ID = O.EMPLOYEE_ID AND O.ORDER_ID = OD.ORDER_ID 
    AND P.PRODUCT_ID = OD.PRODUCT_ID
    WHERE P.PRODUCT_NAME LIKE '%청소기';

/**
	서브쿼리
*/
-- Q13) 'mtkim', 'odoh', 'soyoukim', 'winterkim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.   
select * from order_header;
select * from customer c, (
	select order_id, order_date, total_due from order_header) o
 where customer_id in ('mtkim', 'odoh', 'soyoukim', 'winterkim');
-- Q14) '전주' 지역 고객의 아이디를 조회하세요.   
select * from customer where city = '전주'; 
-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
select * from customer c, (
	select order_id, order_date, total_due from order_header) o
 where customer_id in (select customer_id from customer where city = '전주');
-- Q16) 고객의 포인트 최댓값을 조회하세요. 
-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.

    








