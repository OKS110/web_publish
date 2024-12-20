export default function Tools({toolsList}) {


return (
    <article className="skills__tools">
    <h3 className="skill__title">Tools</h3>
    <ul>

        {toolsList.map((item, index) => {
            return <li key={index}>
                    {item.Tool}
                </li>
        })}

    </ul>
  </article>
    );
};