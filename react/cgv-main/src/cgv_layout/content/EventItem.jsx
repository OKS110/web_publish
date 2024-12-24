export default function EventItem({src, title, date}){


    return (
        <>
            <div>
                <img src={src} alt="Event1"></img>
            </div>
            <strong>{title}</strong>
            <p>{date}</p>
        </>
    );
}