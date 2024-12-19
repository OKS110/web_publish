import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

export default function Arrow() {

const handleArrow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


return (
    <aside>
      <button className="arrow--up" onClick={handleArrow}><FontAwesomeIcon icon={faArrowUp} /></button>
    </aside>
    );
};