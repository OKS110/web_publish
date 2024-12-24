import EventItem from "./EventItem";
import { useEffect, useState } from "react";
export default function Event(){
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        fetch("data/cgv_content.json")
        .then(data => data.json())
        .then(jsonData => setEventList(jsonData.eventList))
        .catch(error => console.log(error))
    }, []);

    return(
        <section>
            <div>
                <h3>EVENT</h3>
                <div className="content-moviechart-title-right">
                    <a href="#">전체보기 &gt;</a>
                </div>
            </div>

            <ul>
                {eventList && eventList.map((event, index) => <li key={index}>
                    <EventItem src={event.src} title={event.title} date={event.date}></EventItem>
                </li>)}
            </ul>
        </section>            
    );
}