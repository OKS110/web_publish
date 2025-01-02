export default function SkillTools({skillTools}) {


return (
    <article className="skills__tools">
    <h3 className="skill__title">Tools</h3>
    <ul>
      {skillTools && skillTools.map((item, index) => <li key={index}>
        {item.tool}
      </li>)}
    </ul>
  </article>
    );
};