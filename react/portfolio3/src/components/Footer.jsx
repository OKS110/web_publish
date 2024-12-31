import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <footer id="contact" class="section">
            <h2 class="title">Let's talk</h2>
            <p class="description">jeon.developer.judy@gmail.com</p>
            <ul class="contact__links">
            <li>
                <a class="contact__link" href="http://github.com"><FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li>
                <a class="contact__link" href="http://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li>
                <a class="contact__link" href="http://linkedin.com"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            </ul>
            <p>Dream Software Engineer Judy - All right reserved</p>
      </footer>

    );
}