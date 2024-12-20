import AboutMajor from "./AboutMajor";
import AboutJobs from "./AboutJobs";

export default function About({about}) {
  if (!about || !about.AboutText ||!about.AboutMajorList || !about.AboutJobsList) {
    return null; // 데이터가 없으면 아무것도 렌더링하지 않음
  }

return (
<section id="about" className="section max-container">
      <h2 className="title">About me</h2>

      <p className="description">{about.AboutText.description}</p>

      <AboutMajor aboutMajorList = {about.AboutMajorList}></AboutMajor>

      <AboutJobs aboutJobsList ={about.AboutJobsList}></AboutJobs>

    </section>
    );
};