import Etc from "./Etc";
import CodingSkill from "./CodingSkill";
import Tools from "./Tools";

export default function Skill({skill}) {
  if (!skill || !skill.SkillTxt || !skill.CodingSkillList || !skill.ToolsList || !skill.EtcList) {
    return null; // 데이터가 없으면 아무것도 렌더링하지 않음
}
console.log(skill);


return (
<section id="skill" className="section max-container">
      <h2 className="title">My Skills</h2>
      <p className="description">Skills & Attributes</p>
      <p>{skill.SkillTxt.skillDescription}</p>
      <div className="skills">
        <CodingSkill codingSkillList = {skill.CodingSkillList}></CodingSkill>

        <Tools toolsList = {skill.ToolsList}></Tools>
        
        <Etc etcList = {skill.EtcList}></Etc>
      </div> 
    </section>
    );
};