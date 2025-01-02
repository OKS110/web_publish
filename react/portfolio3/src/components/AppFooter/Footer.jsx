import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

export default function Footer(){
    const [footerList, setFooterList] = useState([]);
    useEffect(() => {
        fetch('data/portfolio.json')
        .then(data => data.json())
        .then(jsonData => setFooterList(jsonData.Footer))
        .catch(error => console.log(error))
    }, [])
    const iconMap = {
        faGithub: faGithub,
        faLinkedin: faLinkedin,
        faInstagram: faInstagram,
      };


    return(
        <footer id="contact" className="section">
            <h2 className="title">Let's talk</h2>
            <p className="description">jeon.developer.judy@gmail.com</p>
            <ul className="contact__links">
                {footerList.map((item, index) =>  
                    <li key={index}>
                        <a className="contact__link" href={item.link}><FontAwesomeIcon icon={iconMap[item.icon]} /></a>
                    </li>
                )}
            </ul>
            <p>Dream Software Engineer Judy - All right reserved</p>
      </footer>

    );
}