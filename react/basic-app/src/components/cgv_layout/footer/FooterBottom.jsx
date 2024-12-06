import { useEffect, useState } from "react";

export default function FooterBottom(){
    const [companyInfo, setCompanyInfo] = useState({});

    useEffect(() => {
        fetch("/data/cgv_compinfo.json")
        .then(data => data.json())
        .then(jsonData => setCompanyInfo(jsonData))
        .catch(error => console.log(error))
    }, []);
    return(
    <div class="footer-content">
        <div class="footer-intro">
            <ul class="footer_menu">
                {companyInfo.list && companyInfo.list.map((item, index) => <li key={index}><a href="#">{item.name}</a></li>)}
            </ul>
        </div>

        <p class="p">{companyInfo.address}</p>
        <p>대표이사 : {companyInfo.CEO}, 사업자등록번호 : 123-12-45678, 통신판매업신고번호 : 2017-서울용산-**** <u>사업자정보확인</u></p>
        <p>호스팅사업자 : CJ올리브네트웍스, 대표이메일 : cjcgv@cj.net</p>
        <p class="p2">
            <a href="/cgv/admin/admin_main.html" target="_parent">&copy;</a> CJ CGV. All Rights Reserved.
        </p>
    </div>
    );
}