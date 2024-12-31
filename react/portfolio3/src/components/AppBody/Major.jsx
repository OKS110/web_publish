import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {faServer} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Major() {
    const [major, setMajor] = useState([]);

    useEffect(() => {
        fetch('data/portfolio.json')
        .then(data => data.json())
        .then(jsonData => setMajor(jsonData.Major))
        .catch(error => console.log(error))
    }, [])

    const iconMap = {
        faHtml5: faHtml5,
        faMobile: faMobile,
        faServer: faServer,
      };


return (
    <ul class="majors">
        {major.map((item, index) => 
        <li class="major" key={index}>
            <FontAwesomeIcon icon={iconMap[item.icon]} className='major__icon'/>
            <p class="major__title">{item.title}</p>
            <p>{item.description}</p>
    </li>)}
  </ul>
    );
};