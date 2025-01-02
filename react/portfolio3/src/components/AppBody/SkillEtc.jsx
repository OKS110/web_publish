export default function SkillEtc({skillEtc}) {



return (
    <article className="skills__etc">
    <h3 className="skill__title">Etc</h3>
    <ul>
      {skillEtc && skillEtc.map((item, index) => <li key={index}>{item.etc}</li>)}
    </ul>
  </article>
    );
};