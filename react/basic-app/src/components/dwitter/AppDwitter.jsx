import Dwitter from "./Dwitter.jsx";
import { useEffect, useState } from "react";
import './Dwitter.css';

export default function AppDwitter(){
    const [dwitters, setDwitters] = useState([]);


    //react network 접속 진행 시 ==> useEffect() 리액트 Hooks 사용한다!!
    //react hooks -- useEffect();
    //useEffect(callback 함수, dependencies) : 맨 처음에 실행되는 함수

    useEffect(()=>{ //맨 처음 한 번만 호출하도록 상태 관리
        fetch("/data/dwitters.json") //Network를 통해 접속
        .then((result) => result.json())
        .then((jsonData) => setDwitters(jsonData))
        .catch(error => console.log(error));
    }, []);
    
    console.log(`dwitters --> ${dwitters}`);


    return(
        <div className="dwitter-container">
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / SignUP</li>
            </ul>
            {/* Dwitter map을 통해 출력 */}
            {dwitters.map((dwitter, i) => 
            <Dwitter
                index = {i}
                img={dwitter.img}
                name={dwitter.name}
                id={dwitter.id}
                date={dwitter.date}
                content={dwitter.content}/>)}     
        </div>
    );
}