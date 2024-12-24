import Event from './Event.jsx';
import Special from './Special.jsx';
import Package from './Package.jsx';
import Notice from './Notice.jsx';

export default function EventSpecial(){


    return(
        <div className="content-event-special">
           <Event></Event>
           <Special></Special>
           <Package></Package>
           <Notice></Notice>
        </div>
    );
}