import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function FooterIconList() {

    const footerIconList = [
        {
            "icon" : faGithub,
            "link" : "http://github.com"
        },
        {
            "icon" : faLinkedin,
            "link" : "https://kr.linkedin.com"
        },
        {
            "icon" : faInstagram,
            "link" : "http://instagram.com"
        },
    ]
return (
    <ul className="contact__links">
        {footerIconList.map((item, index) => {
            return <li key={index}>
                    <a className="contact__link" href={item.link}><FontAwesomeIcon icon={item.icon} /></a>
                </li>
        })}

    </ul>
    );
};