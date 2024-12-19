import AboutMajor from "./AboutMajor";
import AboutJobs from "./AboutJobs";

export default function About() {

const AboutText = {
  "title":"About me",
  "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus, temporibus perspiciatis repudiandae nostrum modidoloremque expedita non eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto ipsa inventore adipisci."
  
}

return (
<section id="about" className="section max-container">
      <h2 className="title">{AboutText.title}</h2>

      <p className="description">{AboutText.description}</p>

      <AboutMajor></AboutMajor>

      <AboutJobs></AboutJobs>

    </section>
    );
};