export default function Jobs() {

    const jobs = [
        {
            "img" : "images/jobs/google.png",
            "jobName": "Google as Junior Software Engineer",
            "jobPeriod": "2019 Oct - Until now"
        },
        {
            "img" : "images/jobs/samsung.png",
            "jobName": "Samsung as Junior Software Engineer",
            "jobPeriod": "2010 Oct - 2019 Oct"
        }
    ];

return (
    <ul class="jobs">
        {jobs.map((item, index) =>  
        <li class="job" key={index}>
            <img src={item.img} alt="google"/>
            <div>
                <p class="job__name">{item.jobName}</p>
                <p class="job__period">{item.jobPeriod}</p>
            </div>
        </li>)}
   


  </ul>
    );
};