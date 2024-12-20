export default function AboutJobs({aboutJobsList}) {



return (

    <ul className="jobs">
      {aboutJobsList.map((item, index) => {
        return <li className="job" key={index}>
                <img src={item.img} alt="google"/>
                <div>
                  <p className="job__name">{item.jobName}</p>
                  <p className="job__period">{item.jobPeroid}</p>
                </div>
              </li>
      })}
    </ul>
    );
};