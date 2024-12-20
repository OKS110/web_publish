import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {faServer} from '@fortawesome/free-solid-svg-icons';


export default function AboutMajor({aboutMajorList}) {

  
  
return (
    <ul className="majors">
      {aboutMajorList.map((item, index) => {
        return <li className="major" key={index}>
                <FontAwesomeIcon icon={item.icon} className='major__icon'/>
              <p className="major__title">{item.skillTitle}</p>
              <p>{item.skillDescription}</p>
          </li>
      })}

  </ul>
    );
};