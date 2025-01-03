export default function WorkProjects({workProjects}) {





return (
<ul className="projects">
  {workProjects && workProjects.map((item, index) => 
            <li className="project" key={index}>
            <img className="project__img" src={item.img} alt={item.alt}/>
            <div className="project__metadata">
                <h3 className="project__metadata__title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
        )}
       
  </ul>    
    );
};