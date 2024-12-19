import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {faServer} from '@fortawesome/free-solid-svg-icons';


export default function AboutMajor() {
return (
    <ul className="majors">
    <li className="major">
      <FontAwesomeIcon icon={faHtml5} className='major__icon'/>
      <p className="major__title">Front-end</p>
      <p>HTML, CSS, JavaScript, TypeScript, React, WebAPIs</p>
    </li>
    <li className="major">
      <FontAwesomeIcon icon={faMobile} className='major__icon'/>
      <p className="major__title">Mobile</p>
      <p>Android Studio, React Native, iOS, Swift, Java, Kotlin</p>
    </li>
    <li className="major">
      <FontAwesomeIcon icon={faServer} className='major__icon'/>
      <p className="major__title">Back-end</p>
      <p>Java, JavaScript, Go, Kotlin, Spring, Spring Boot</p>
    </li>
  </ul>
    );
};