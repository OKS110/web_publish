import PackageContent from "./PackageContent";
import { useEffect, useState } from "react";

export default function Package(){
    const [pList, setPList] =useState([]);
    useEffect(() => {
        fetch('data/cgv_content.json')
        .then(data => data.json())
        .then(jsonData => setPList(jsonData.pList))
        .catch(error => console.log(error))
    }, []);
    return (
        <section className="package">
            {pList && pList.map((item) => <PackageContent listTitle = {item.title} list={item.list}></PackageContent>)}
        </section>        
    );
}