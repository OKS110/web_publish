import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function FooterIconList() {

return (
    <ul className="contact__links">

        <li>
            <a className="contact__link" href="http://github.com"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li>
            <a className="contact__link" href="http://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
        </li>
    </ul>
    );
};