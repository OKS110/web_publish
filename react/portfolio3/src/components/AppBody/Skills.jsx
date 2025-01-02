import SkillCoding from "./SkillCoding";
import SkillEtc from "./SkillEtc";
import SkillTools from "./SkillTools";

export default function Skills({skills}){
    return(
<section id="skill" className="section max-container">
      <h2 className="title">My Skills</h2>
      <p className="description">Skills & Attributes</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
        eveniet cupiditate optio natus? Cum, harum eum sint id quod 
        nulla adipisci. Sunt?</p>

        
      <div className="skills">
        <SkillCoding codingSkills = {skills.CodingSkills}></SkillCoding>

        <SkillTools skillTools = {skills.toolList}></SkillTools>
        
        <SkillEtc skillEtc = {skills.etcList}></SkillEtc>
      </div> 
    </section>
    );
}