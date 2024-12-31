import SkillCoding from "../SkillCoding";
import SkillEtc from "./SkillEtc";
import SkillTools from "./SkillTools";

export default function Skills(){
    return(
<section id="skill" class="section max-container">
      <h2 class="title">My Skills</h2>
      <p class="description">Skills & Attributes</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
        eveniet cupiditate optio natus? Cum, harum eum sint id quod 
        nulla adipisci. Sunt?</p>

        
      <div class="skills">
        <SkillCoding></SkillCoding>

        <SkillTools></SkillTools>
        
        <SkillEtc></SkillEtc>
      </div> 
    </section>
    );
}