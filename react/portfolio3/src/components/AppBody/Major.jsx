import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {faServer} from '@fortawesome/free-solid-svg-icons';

export default function Major({aboutMajor}) {


    const iconMap = {
        faHtml5: faHtml5,
        faMobile: faMobile,
        faServer: faServer,
      };


return (
    <ul className="majors">
        {aboutMajor && aboutMajor.map((item, index) => {
            return <li className="major" key={index}>
            <FontAwesomeIcon icon={iconMap[item.icon]} className='major__icon'/>
            <p className="major__title">{item.title}</p>
            <p>{item.description}</p>
        </li>
        }
        )}
  </ul>
    );
};