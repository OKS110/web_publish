export default function Etc({etcList}) {


return (
    <article className="skills__etc">
    <h3 className="skill__title">Etc</h3>
    <ul>
        {etcList.map((item, index) => {
            return <li key={index}>
                {item.Etc}
            </li>
        })}
    </ul>
  </article>
    );
};