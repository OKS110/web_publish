export default function Jobs({aboutJobs}) {



return (
    <ul className="jobs">
        {aboutJobs && aboutJobs.map((item, index) =>  
        <li className="job" key={index}>
            <img src={item.img} alt="google"/>
            <div>
                <p className="job__name">{item.jobName}</p>
                <p className="job__period">{item.jobPeriod}</p>
            </div>
        </li>)}
   


  </ul>
    );
};