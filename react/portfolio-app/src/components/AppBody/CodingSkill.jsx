export default function CodingSkill({codingSkillList}) {


return (
    <article className="skills__coding">
    <h3 className="skill__title">Coding Skills</h3>
    <ul>
        {codingSkillList.map((item, index) => {
            return <li className="bar" key={index}>
                        <div className="bar__metadata"><span>{item.title}</span><span>{item.percent}</span></div>
                        <div className="bar__bg"><div className="bar__value" style={{width:item.percent}}></div></div>
                    </li>
        })}
   
    </ul>
  </article>
    );
};