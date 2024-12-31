
/*
	* 데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다.
	SQL(Structured Query Language): 데이터 베이스에서 사용하는 구조화된 언어
    --> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어
    
    (1) DDL(Data Definition Language) : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어
        - CREATE, ALTER, TRUNCATE, DROP
	(2) DML(Data Manipulation Language) : 데이터 조작어
		- 데이터를 CRUD 작업을 수행하는 언어
        - insert(C), select(R), update(U), delete(D)
	(3) DCL(Data Control Language) : 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어
        - GRANT(부여), DEVOKE(해제)
	(4) DTL(Data Transaction Language) : 데이터 트랜잭션 제어어
		- 데이터베이스 작업 처리 단위인 트랜잭션을 관리하는 언어
        - commit(완료), rollback(취소), savepoint(작업구간별 저장) ..
*/
/**
	데이터베이스 선택 및 조회
    show databases;  			-- 모든 데이터베이스 목록을 출력
    use [선택한 데이터베이스명];  	-- 사용할 데이터베이스 선택
    select database()  		-- 데이터베이스 선택
    show tables;  				-- 데이터베이스에 저장된 테이블 전체 조회
    

*/
show databases;
use hrdb2019;
select database();
show tables;

/**
	테이블 구조 확인 : DESC(DESCRIBE)
    형식 - DESC[테이블명];
*/
SHOW TABLES;
DESC DEPARTMENT;
DESC EMPLOYEE;
DESC UNIT;
DESC VACATION;

/**
	테이블 조회(단순) : SELECT
    형식 - SELECT [컬럼 리스트] FROM [테이블명];
		  SELECT [*(전체컬럼리스트)] FROM [테이블명];
*/

SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_ID, EMP_NAME FROM EMPLOYEE;
SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;

-- 사원테이블에서 사원아이디, 사원명, 성별, 입사일 조회
SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE FROM EMPLOYEE;

-- 사원테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉을 조회
SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_NAME, DEPT_ID, HIRE_DATE, PHONE, SALARY FROM EMPLOYEE;

-- 부서 테이블의 모든 컬럼을 조회
SHOW TABLES;
SELECT * FROM DEPARTMENT;

-- [조회한 컬럼명을 ALIAS(별칭)으로 출력]
-- 형식 : SELECT [컬럼명 AS '별칭', 컬럼명 AS '별칭' ...] FROM [테이블명];
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 컬럼을 출력

SELECT * FROM EMPLOYEE;

SELECT 
EMP_ID AS '아이디', 
EMP_NAME AS '성명', 
HIRE_DATE AS '입사일',
DEPT_ID AS '부서명', 
SALARY AS '연봉'
FROM EMPLOYEE;
    
SELECT 
EMP_ID '아이디', -- AS가 생략되어도 된다.
EMP_NAME 성명, -- 별칭이 한 단어인 경우에는 ''가 생략 가능하다.
HIRE_DATE AS '입사일',
DEPT_ID AS '부서명', 
SALARY AS '연봉'
FROM EMPLOYEE;

-- 사원테이블에서 사원명, 부서, 연봉을 조회
-- 별칭으로 컬럼명을 수정
-- 기존 컬럼을 이용하여 가상의 컬럼 생성 - 연봉 10% 인센티브 컬럼, 물리적 X(가상으로 존재)
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
DESC EMPLOYEE;
SHOW DATABASES;
SELECT EMP_NAME 사원명, DEPT_ID 부서, SALARY 연봉, SALARY*0.1 인센티브 FROM EMPLOYEE;

-- 현재의 날짜를 조회, 컬럼명을 'DATE'로 변경
SELECT CURDATE() AS 'DATE';

/**
	테이블 조회(단순) : SELECT ~ FROM ~ WHERE
    - 조건절을 추가하여 다양한 쿼리를 실행
    형식 - SELECT [컬럼리스트, *] 
			FROM [테이블명]
            WHERE[조건절];
*/
-- 사원테이블에서 SYS 부서에 근무하는 모든 사원을 조회

SELECT *
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS';
-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회

SELECT *
FROM EMPLOYEE
WHERE EMP_NAME = '정주고';

-- 사원 테이블에서 사원 아이디가 S0011인 사원의 정보를 모두 조회
SELECT * FROM EMPLOYEE WHERE EMP_ID = 'S0011';

-- 사원테이블에서 연봉이 5800인 사원의 모든 정보 조회
SELECT * FROM EMPLOYEE WHERE SALARY = '5800';

-- 사원테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회
SELECT EMP_ID, EMP_NAME, HIRE_DATE, EMAIL FROM EMPLOYEE WHERE GENDER = 'F';

-- 사원 테이블에서 부서명이 SYS인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원 번호' 별칭 사용

SELECT EMP_ID AS '사원번호', EMP_NAME, HIRE_DATE FROM EMPLOYEE WHERE DEPT_ID = 'SYS';

-- WHERE절 조건에 별칭으로 조회가 가능할까요??? - NOPE
SELECT EMP_ID AS '사원번호', EMP_NAME, HIRE_DATE, DEPT_ID '부서 번호' FROM EMPLOYEE
--  WHERE '부서 번호' = 'SYS'; 
WHERE DEPT_ID = 'SYS';

-- 사원 테이블에서 마케팅 부서의 모든 사원 정보를 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'MKT';
-- 사원 테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회
SELECT * FROM EMPLOYEE WHERE HIRE_DATE = '2014-08-01'; -- DATE타입 표현은 문자, 처리는 숫자
-- 연봉이 5000인 사원 정보 조회
SELECT * FROM EMPLOYEE WHERE SALARY = 5000;

-- NULL 타입?? 
-- 숫자 컬럼에서는 가장 큰 숫자로 인식, 문자 컬럼에서는 작은 문자로 인식
-- NULL은 논리적인 의미를 가지므로 IS 키워드로 비교 연산을 수행

-- 사원테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
SELECT * FROM EMPLOYEE WHERE ENG_NAME IS NULL;
					-- WHERE ENG_NAME = NULL; - X

-- 연봉이 정해지지 않은 모든 사원 조회
SELECT * FROM EMPLOYEE WHERE SALARY IS NULL;

-- ifnull() : NULL 값을 다른 값으로 대체해주는 함수
-- 형식 : ifnull((null포함)컬럼명, 대체할 값);
-- 컬럼리스트에서 호출
SELECT EMP_NAME, SALARY, IFNULL(SALARY, 0) AS SALARY2 FROM EMPLOYEE;

-- ENG_NAME이 NULL인 사원들은 'SMITH' 이름으로 변경 후 조회
-- 출력되는 컬럼명은 ENG_NAME으로 변경
SELECT EMP_ID, EMP_NAME, IFNULL(ENG_NAME, 'SMITH') AS ENG_NAME FROM EMPLOYEE;

-- 모든 사원의 아이디, 사원명, 입사일, 퇴사일을 조회
-- 현재 근무 중인 사원인 퇴사일에 현재의 날짜를 출력

SELECT EMP_ID, EMP_NAME, HIRE_DATE, IFNULL(RETIRE_DATE, CURDATE()) AS RETIRE_DATE
 FROM EMPLOYEE;

/**
	DISTINCT : 데이터 중복 배제, 중복된 데이터 하나만 출력
    형식 - SELECT [DISTINCT 컬럼리스트(중복데이터 포함)] 
			FROM [테이블명]
			WHERE [조건절];
*/ 
-- 사원테이블의 부서 컬럼을 조회(중복데이터 처리)
SELECT DISTINCT DEPT_ID FROM EMPLOYEE;

-- (중복 데이터가 처리되지 않는 경우, EMP_ID가 유니크하기 때문)
SELECT DISTINCT EMP_ID, DEPT_ID FROM EMPLOYEE;

/**
	ORDER BY : 데이터 정렬(오름차순, 내림차순)
    형식 : SELECT ~
			FROM ~
			WHERE ~
            ORDER BY 컬럼리스트 [ASC/DESC]
*/
-- 사원아이디, 사원명, 입사일, 연봉을 조회
-- 사원아이디 기준 오름차순으로 정렬
SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY 
	FROM EMPLOYEE
	ORDER BY EMP_ID DESC; -- ORDER BY에 들어가는 기준 컬럼은 SELECT 안에 반드시 하나는 있어야 함.
	
-- 사원아이디 기준 오름차순, 입사일 기준 내림차순
SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY FROM EMPLOYEE ORDER BY EMP_ID ASC, HIRE_DATE DESC;

-- 급여를 기준으로 오름차순 정렬 후 조회
SELECT * FROM EMPLOYEE ORDER BY SALARY ASC;

-- ENG_NAME이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
SELECT * FROM EMPLOYEE WHERE ENG_NAME IS NULL ORDER BY HIRE_DATE DESC;

-- 퇴직한 사원들을 급여가 높은 순으로 조회
SELECT * FROM EMPLOYEE WHERE RETIRE_DATE IS NOT NULL ORDER BY SALARY DESC; -- IS NOT NULL은 생략 가능

-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'SYS' ORDER BY SALARY DESC;

-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'SYS' ORDER BY HIRE_DATE DESC, SALARY ASC;

/**
	특정 범위의 데이터 검색 : WHERE [조건절 + 비교 연산자]
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 [비교연산자 조건절]
*/
-- 사원중에서 연봉이 5000 이상인 사원들을 연봉이 높은 순으로 조회
SELECT * FROM EMPLOYEE WHERE SALARY >= 5000 ORDER BY SALARY DESC;

-- 입사일이 '2016년 1월 1일'이전에 입사한 사원들 조회
-- DATE 타입은 표현은 문자처럼, 처리 방식은 숫자처럼
SELECT * FROM EMPLOYEE WHERE HIRE_DATE <= '2016-01-01';

-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000 이상인 사원들을 조회
-- AND(~이고) : 두 개의 조건을 모두 만족한 데이터만 조회
SELECT * FROM EMPLOYEE WHERE HIRE_DATE >= '2015-01-01' AND SALARY >= 6000;

-- 입사일이 2015년 1월 1일 이후이거나 또는, 급여가 6000 이상인 사원들을 조회
-- OR(~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회
SELECT * FROM EMPLOYEE WHERE HIRE_DATE >= '2015-01-01' OR SALARY >= 6000;

-- 입사일이 2015년 1월 1일부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회
SELECT * FROM EMPLOYEE WHERE HIRE_DATE >='2015-01-01' AND HIRE_DATE <= '2017-12-31';

-- 연봉 구간이 5000이상 7000미만의 사원들을 모두 조회
SELECT * FROM EMPLOYEE WHERE SALARY >= 5000 AND SALARY < 7000;

/**
	BETWEEN ~ AND : 특정 구간 조회 시 사용
    형식 : SELECT [컬럼리스트]
			FROM [테이블명]
			WHERE 컬럼명 BETWEEN [시작구간] AND [종료구간];
*/

-- 2016년 입사자들을 조회
-- (2016-01-01 ~ 2016-12-31)
SELECT * FROM EMPLOYEE WHERE HIRE_DATE BETWEEN '2016-01-01' AND '2016-12-31';

-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회
SELECT * FROM EMPLOYEE WHERE EMP_ID = 'S0001' OR EMP_ID = 'S0010' OR EMP_ID = 'S0020';

-- 부서 아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'MKT' OR DEPT_ID = 'GEN' OR DEPT_ID = 'HRD';

 /**
	IN 연산자 : 한 컬럼에 추가되는 OR 연산식을 대체하는 연산자
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 IN (조건1, 조건2, 조건3, ...);
 */
 
 -- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회
SELECT * FROM EMPLOYEE WHERE EMP_ID IN ('S0001', 'S0010', 'S0020');

-- 부서 아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID IN ('MKT', 'GEN', 'HRD');

/**
	와일드 카드 문자 : 특정 문자열 검색 + LIKE
    종류 : %(전체), _(한 문자)
    사용법 : LIKE 연산자와 함께 조건식을 추가하여 사용됨
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 LIKE [와일드 카드 문자를 이용한 특정 문자열 검색 조건]
*/
 -- 영어 이름이 'f'로 시작하는 모든 사원들을 조회
 SELECT * FROM EMPLOYEE WHERE ENG_NAME LIKE 'f%';
 
 -- '한'씨 성을 가진 모든 사원들을 조회;
 SELECT * FROM EMPLOYEE WHERE EMP_NAME LIKE '한%';
 
 -- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회
 SELECT * FROM EMPLOYEE WHERE EMAIL LIKE '_a%';
 
 -- 이메일 주소가 4자리인 모든 사원을 조회
 SELECT * FROM EMPLOYEE WHERE EMAIL LIKE '____@%';
 
 -- 이름에 '삼'이 들어가는 모든 사원을 조회
 SELECT * FROM EMPLOYEE WHERE EMP_NAME LIKE '%삼%';
 
 /************************************************************
	내장함수(Built-in) : 숫자, 문자, 날짜 함수	
    - 함수 테스트를 위한 테이블 DUAL
    - select [함수 실행] from dual;
 *************************************************************/
 -- 1. 숫자 함수 : abs(), rand(), truc() ...
 -- (1) abs 함수 : 절대값 표현 함수
 select 100, -100, abs(100), abs(-100)
	from dual;
    
 -- (2) floor 함수 : 소수점을 버리는(삭제) 함수
 -- 	truncate 함수 : 소수점을 삭제하는 함수 - truncate(데이터, 자릿수)
 select 123.456, floor(123.456)from dual;
 select 123.456, truncate(123.456, 0) as '소수점 0', truncate(123.456, 2) as '소수점 2' from dual;
 
 -- (3) rand 함수 : 임의의 수를 생성
 select rand(), rand() * 1000, rand() * 100000 from dual;
 
 -- 정수만 출력하는 쿼리 실행
  select floor(rand()) as 'rand1', truncate(rand() * 100, 0) as 'rand2' from dual;
  
 -- (4) MOD 함수 : 모듈러 연산을 실행하는 함수 - MOD(숫자데이터, 연산숫자)
 select mod(100, 2) 짝수, mod(101, 2) 홀수 from dual;
 
 -- 1~3 자리의 정수를 생성하고, 생성한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요.
 select mod(truncate(rand() * 1000, 0), 2) as result from dual;
 
 -- 사원테이블에서 사원 아이디, 사원명, 부서아이디, 입사일, 연봉, 인센티브(연봉의 20%)를 조회
 -- 인센티브의 소수점 생략
 -- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함
 -- 연봉이 5000 미만
 select emp_id, 
		emp_name,
        dept_id,
        hire_date,
        ifnull(salary, 0) as salary,
        ifnull(truncate(salary * 0.2, 0), 0) as incentive 
	from employee
    -- where salary between 0 and 4999; 
    -- where 절의 0부터 4999사이의 값을 스캔한 후에 select구문이 실행되므로  (where 조건이 먼저)
    -- 처음 where 절에서 고소해씨는 null값으로 판단된다. 따라서 값이 나오지 않는다.
    where salary < 5000 or salary is null;
 
 -- 2. 문자 함수 : concat(), substring() ...
 -- (1) concat(문자열, 문자열 ... ) : 문자열 결합
 select concat('MY', 'SQL', '-84') as name
	from dual;
    
 -- 사원테이블의 사원명과 영어 이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 TEST_NAME으로 조회
 -- 예시) 홍길동/HONG
 -- 영어 이름이 정해지지 않은 사원은 빈 문자열로 치환해서 실행
select emp_name, eng_name, concat(emp_name, '/', ifnull(eng_name, '')) as TEST_NAME from employee;

 -- 사원테이블에서 사원아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성하고 조회
 -- 사원아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼리스트를 조회
 -- 현재 근무중인 사원은 현재 날짜를 출력
 select 
	emp_id, 
    concat(emp_id, '_', truncate(rand() * 100000, 0)) as 사원번호,
	emp_name, hire_date, ifnull(salary, 0) as salary, 
	ifnull(retire_date, now()) as retire_date
	from employee;
    
 -- (2) substring(문자열, 위치, 추출자릿수) : 문자열 추출 함수
 select 
	substring('대한민국 홍길동 만세 1234!!', 1, 4) as 대한민국,
	substring('대한민국 홍길동 만세 1234!!', 6, 3) as 홍길동,
	substring('대한민국 홍길동 만세 1234!!', 10, 2) as 만세,
	substring('대한민국 홍길동 만세 1234!!', 17, 2) as '!!'
	from dual;
    
 -- 사원테이블에서 사원아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
 select emp_id, emp_name,
	substring(hire_date, 1, 4) as 입사년도,
	substring(hire_date, 6, 2) as 입사월,
    substring(hire_date, 9, 2) as 입사일,
    ifnull(salary, 0) as 급여
 from employee;
 
 -- 2015년도 입사한 모든 사원들을 조회
 select * from employee
 where substring(hire_date, 1, 4) = 2015;
 
 -- 2018년도 정보시스템 부서에 입사한 모든 사원들을 조회
 select * from employee
 where substring(hire_date, 1, 4) = 2018 and dept_id = 'sys';  
    
 -- (3) left(문자열, 추출숫자), right(문자열, 추출숫자)
 select left('대한민국 홍길동 만세 1234!!', 4) 대한민국,
		right('대한민국 홍길동 만세 1234!!', 2) '!!'
 from dual;
 
 -- 2015년도에 입사한 모든 사원들을 조회
 select * from employee where left(hire_date, 4) = 2015;
 
 -- 사원들의 폰 번호 마지막 4자리를 조회
 -- 사원명, 부서 아이디, 입사년도, 폰 번호(마지막 4자리) 조회
 select emp_name, emp_id, left(hire_date, 4) as hire_date, right(phone, 4) as phone from employee;
 
 -- (4) upper(대문자), lower(소문자)
 select upper(eng_name) from employee;
 select lower(dept_id) from employee;
 
 -- (5) trim() : 공백 제거 함수
 select trim('                 MYSQL 84') as trim1,
	trim('MYSQL 84             ') as trim2,
    trim('        MYSQL     84     ') as trim3
	from dual;
 
 -- (6) format(문자열 또는 숫자, 소수점자리) : 문자열의 포맷 수정
 -- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
 select format(123456, 0) format1, format(123456, 2) format2 from dual;   
 
 -- 사원테이블의 사원아이디, 사원명, 입사일, 연봉을 조회
 -- 연봉 협상 전인 사원은 0으로 변환 후 조회
 -- 연봉은 3자리씩 콤마로 구분하여 출력
select emp_id, emp_name, hire_date, concat(format(ifnull(salary, 0), 0), '만원') as salary from employee;    

-- 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 보너스(연봉의 0.05%) 컬럼들을 조회
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력 후 '만원' 추가
-- 보너스 컬럼은 소수점 1자리까지 출력
select 
	emp_id, emp_name, dept_id, hire_date, 
	concat(format(ifnull(salary, 0), 0), '만원') as salary, 
	format(ifnull(salary * 0.05, 0), 1) as bonus
	from employee;

 -- 3. 날짜 함수 : curdate(), now(), sysdate()
 -- (1) curdate() : 현재 시스템 날짜를 출력
 select curdate() from dual;
 
 -- (2) now(), sysdate() : 현재 시스템 날짜를 출력, 년/월/일 시/분/초 출력
 select now(), sysdate() from dual;
 
 -- 4. 형변환 함수 : cast(), convert() - old version
 -- cast(변경데이터 as 데이터타입)
 select 12345 숫자, cast(12345 as char) 문자 from dual;
select '12345' 문자, cast('12345' as unsigned integer) 정수 from dual;

-- 입력폼에서 '20150101' 데이터 날짜를 가진 사원을 조회
select *
	from employee
    where hire_date = cast('20150101' as date);
    
-- floor 함수를 적용한 cast 함수
select 
	floor('12-34-5') 문자,
	floor(cast('12-34-5' as unsigned integer)) 정수
 from dual;
 
 -- 5. 문자열 치환 함수 : replace(문자열, old, new)
 select 
	'123,456' 문자,
	cast(replace('123,456', ',', '') as unsigned integer) 숫자 
		from dual;
 
 -- 사원테이블의 입사일 포맷을 변경 '2015-01-01' --> '2015/01/01'
 select emp_name, hire_date, replace(hire_date, '-', '/') as hire_date from employee;
 
 
  /************************************************************
	그룹(집계)함수 : sum(), avg, min(), max(), count(), ...
	group by : 그룹함수를 적용하기 위해 일반컬럼을 그룹핑하는 단위
    having : 그룹함수의 조건절을 적용하는 구문
 *************************************************************/
 -- 1. sum(숫자, 숫자컬럼)
 -- 사원테이블에서 모든 사원의 연봉 총합을 조회
 -- 3자리 구분, '만원' 단위 추가
 select emp_id, sum(salary) as '총 연봉' from employee; -- 그룹함수는 일반 컬럼과 같이 사용할 수 없다.
 select concat(format(sum(salary), 0), '만원') as '총 연봉' from employee;
 select * from employee;
 
 -- 2. avg(숫자, 숫자컬럼)
 -- 사원들의 총 연봉, 평균연봉을 조회
 -- 3자리 구분, '만원' 단위 추가
 -- 소수점 1자리까지 유지
 select concat(format(sum(salary), 1), '만원') 총연봉, concat(format(avg(salary), 1), '만원') 평균연봉 from employee;
 
 -- 3. min(숫자, 숫자컬럼)
 -- 가장 작은 값을 출력
 -- 사원들의 총연봉, 평균연봉, 최소연봉을 최대연봉을 출력
 -- 3자리 구분, '만원' 추가, 소수점자리 생략
 select concat(format(sum(salary), 0), '만원') 총연봉,
		concat(format(avg(salary), 0), '만원') 평균연봉,
		concat(format(min(salary), 0), '만원') 최소연봉 
        from employee;
	

 -- 4. max(숫자, 숫자컬럼)
 -- 가장 큰 값을 출력
 -- 사원들의 총연봉, 평균연봉, 최소연봉을 최대연봉을 출력
 -- 3자리 구분, '만원' 추가, 소수점자리 생략
 select concat(format(sum(salary), 0), '만원') 총연봉,
		concat(format(avg(salary), 0), '만원') 평균연봉,
		concat(format(min(salary), 0), '만원') 최소연봉,
        concat(format(max(salary), 0), '만원') 최대연봉
        from employee;
 
 -- 5. count(컬럼명)
 -- 테이블의 row count를 출력 
 -- null을 포함한 데이터의 count를 계산하지 x
 select count(*) 총사원수, count(salary) 연봉협상완료사원수 from employee; -- 20  19
 
 select *
	from employee
    where salary is null;
    
 -- 총사원수, 퇴직사원수, 현재사원수를 조회
 -- 인원수 뒤에 '명' 단위 추가
 select 
	 concat(cast(count(*) as char), '명') 총사원수,
	 concat(count(retire_date), '명') 퇴직사원수,
	 concat(count(*) - count(retire_date), '명') 현재사원수 
     from employee;

 -- 사원테이블에서 정보시스템 부서의 사원수를 조회
 select count(*) from employee where dept_id = 'sys';
 
 -- 2015년도에 입사한 사원수를 조회
 select count(*) as '2015년 입사자(명)', sum(salary) 총연봉, avg(salary) 평균연봉,
		min(salary) 최소연봉, max(salary) 최대연봉
 from employee where substring(hire_date, 1, 4) = '2015';       
 
 -- 가장 최근 입사자와 오래된 입사자의 입사일 조회
 select max(hire_date) as '최근 입사일', min(hire_date) as '최초 입사일' from employee;
 
 -- HRD 부서 기준 최근 입사자와 오래된 입사자의 입사일 조회
 select max(hire_date), min(hire_date) from employee where dept_id = 'hrd';
 
 -- 마케팅부서 기준 가장 낮은 연봉과 높은 연봉을 조회        
 select min(salary), max(salary) from employee where dept_id = 'mkt';
 
 -- 6. group by ~ 적용 : ~~별 그룹함수를 적용해야 하는 경우
 -- 사원테이블에서 부서별 사원수를 조회
 -- group by에 사용된 일반컬럼은 그룹함수와 함께 조회가 가능
 select dept_id, count(*) 부서별사원수
	from employee
    group by dept_id;
 
 -- 입사년도별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
 select substring(hire_date, 1, 4) 입사년도, sum(salary), truncate(avg(salary), 0), min(salary), max(salary), count(*) from employee
	group by substring(hire_date, 1, 4);
 
 -- 부서별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
 select dept_id, sum(ifnull(salary, 0)), avg(ifnull(salary, 0)), min(ifnull(salary, 0)), max(ifnull(salary, 0)), count(*) from employee
	group by dept_id;
 
 select * from department;
 
 -- 7. having 절 : group by를 통해 그룹핑한 결과에 조건절을 추가하는 구문
 -- 부서별 평균 연봉을 조회
 -- null값이 포함된 경우 0으로 변환
 -- 부서 평균연봉이 6000 이상인 부서만 출력
 -- 평균연봉 기준 오름차순으로 정렬
 select dept_id, truncate(avg(ifnull(salary, 0)), 0) 평균연봉 -- 오라클 NVL(컬럼명, 값)
	from employee
	group by dept_id
    having 평균연봉 >= 6000 -- having 절에서는 별칭컬럼명을 조건으로 사용가능함
    order by 평균연봉 asc;
    
 -- 입사년도 기준 총연봉, 평균연봉을 조회
 -- 총연봉이 5000 이상인 사원들만 출력
 -- null값을 포함한 경우 0으로 초기화
 select substring(hire_date, 1, 4) 입사년도, sum(ifnull(salary, 0)) 총연봉, avg(ifnull(salary, 0)) 평균연봉 from employee
	group by substring(hire_date, 1, 4)
	having 총연봉 >= 5000;    
    
 -- 부서별 남녀 사원의 사원수를 조회
 select dept_id 부서ID, gender 성별, count(*) 사원수 from employee
	group by dept_id, gender;
    
 -- 8. rollup 함수 : reporting을 위한 함수
 -- 형식 : select [컬럼리스트] from [테이블명]
 -- 		where [조건절]
 -- 		group by [그룹핑 컬럼] with rollup;
 -- 부서별 총연봉을 조회, 연봉이 정해지지 않는 부서는 포함하지 않음
 select if(grouping (dept_id), '부서총합계', ifnull(dept_id, '-')) 부서, concat(format(sum(salary), 0), '만원') 총연봉 
	from employee where salary is not null group by dept_id with rollup;
 
 -- 입사년도별 평균연봉을 조회
 -- 연봉이 정해지지 않는 부서는 포함하지 않음
 -- 평균연봉이 6000이상 되는 입사년도만 출력
 -- 3자리 구분, '만원' 단위 추가
 -- 리포팅 함수 사용, '연도별 총합계' 컬럼명 추가
 -- (grouping에는 함수가 들어갈 수 없다.)
select if(grouping(year), '연도별평균연봉', ifnull(year, '-')), concat(format(avg(salary), 0), '만원') 평균연봉
	from (select left(hire_date, 4) year,
		salary
	from employee) t
    where salary is not null and salary >= 6000 
	group by year with rollup;
 
 
 
 
 show tables;
 
 -- 사원들의 휴가 사용 내역을 조회
 select * from vacation;
 
 -- 사원아이디별 휴가사용 횟수 조회
 -- 총 휴가사용일 기준으로 내림차순 정렬
 select emp_id, count(*) 휴가횟수, sum(duration) 총휴가사용일자 from vacation group by emp_id
	order by sum(duration) desc;
 
 -- 2016 ~ 2017년도 사이에 사원아이디별 휴가사용 횟수 조회
 -- 총휴가사용일 기준으로 내림차순 정렬
 select if(grouping(emp_id), '총휴가사용내역', ifnull(emp_id, '-')) 사원ID, count(*) 휴가상신횟수, sum(duration) 총사용일수 
	from vacation 
    where substring(begin_date, 1, 4) between 2016 and 2017 
	group by emp_id with rollup 
    order by 총사용일수 desc; 
    
    
    
    
    
    
    
 
 
 