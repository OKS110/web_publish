import {db} from './db.js';


// 전체 상품 조회
export const getList = async () => {
    // const sql = `
    //     select 
    //         pid, pname as name,
    //         price, description as info,
    //         concat('http://localhost:9000/', upload_file) as image, 
    //         source_file,
    //         pdate
    //     from shoppy_product

    // `;
    const sql = `
        select 
            pid, pname as name,
            price, description as info,
            concat('http://localhost:9000/', upload_file->>'$[0]') as image, 
            source_file,
            pdate
        from shoppy_product`; //->> 는 데이터타입이 json인 경우에 가능
    const [result] = await db.execute(sql);
    console.log("result ==> ", result);
    
    return result; //[{}, {}, {}]
};



// 상품 등록
export const registerProduct = async (formData) => {
    const sql = `
        insert into shoppy_product(pname, price, description, upload_file, source_file, pdate)
            values(?, ?, ?, ?, ?, now())
    `;
    const values = [
        formData.productName,
        formData.price || 0,
        formData.description || "",
        formData.uploadFile || null,
        formData.sourceFile || null
    ];
    const [result] = await db.execute(sql, values);
    return {'result_rows' : result.affectedRows};
};

// 상품 상세 정보 조회
export const getProduct = async (pid) => {
    console.log("pid ===>>", pid);
    const sql = `
    select 
		pid,
		pname as name,
        price, 
        description as info,
        upload_file as uploadFile,
        source_file as sourceFile,
        pdate,
        concat("http://localhost:9000/",upload_file->>'$[0]') as image,
        json_array(
			concat("http://localhost:9000/", upload_file ->> '$[0]'),
            concat("http://localhost:9000/", upload_file ->> '$[1]'),
            concat("http://localhost:9000/", upload_file ->> '$[2]')
        ) as imgList,
          json_arrayagg(
			        concat('http://localhost:9000/', jt.filename)
                ) as detailImgList
	    from shoppy_product, 
		    json_table(shoppy_product.upload_file, '$[*]'
			    columns( filename varchar(100) path '$')) as jt 
            where pid = ?
            group by pid

    `;
    const [result] = await db.execute(sql, [pid]); // result = [ [{ pid:4, ~~ }], [컬럼명 field] ]
    console.log("result ===>>> ", result[0]);
    
    return result[0];
}

// 장바구니 상품 정보 조회
export const getCartItems = async({pids}) => { //{pids}는 배열
    const strArray = [];
    pids.forEach(item => strArray.push("?"));
    // console.log("strArray", strArray);
    
    const sql = `
        select 
            pid, 
            pname, 
            price, 
            description, 
            concat("http://localhost:9000/", upload_file ->> '$[0]') as image
	    from shoppy_product 
        where pid in (${strArray.join(",")})`;
        // console.log('sql ===> ', sql);
        
    const [result] = await db.execute(sql, pids);
    return result;
}