
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Testimonial from "./Testimonial";


import Arrow from "../Arrow";
import { useEffect, useState } from "react";

export default function Body() {
    const [home, setHome] = useState();
    const [about, setAbout] = useState();
    const [skill, setSkill] = useState();
    const [work, setWork] = useState();
    const [testimonial, setTestimonial] = useState();


    useEffect(() => {
        fetch('/data/portfolio.json')
        .then(data => data.json())
        .then(jsonData => {
            setHome(jsonData.Body.Home);
            setAbout(jsonData.Body.About); //폰트어썸 해결해야함
            setSkill(jsonData.Body.Skills);
            setWork(jsonData.Body.Work);
            setTestimonial(jsonData.Body.Testimonial);
        })
        .catch(error => console.log(error))
    }, []);
    console.log(home);
    
return (
<main>
    <Home home = {home}></Home>
    <About about = {about}></About> 
    <Skill skill = {skill}></Skill>
    <Work work = {work}></Work>
    <Testimonial testimonial = {testimonial}></Testimonial>

    <Arrow></Arrow>
</main>
    );
};