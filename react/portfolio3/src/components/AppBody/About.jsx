
import Jobs from './Jobs';
import Major from './Major';

export default function About({about}){

    console.log(about.Major);
    
    return(
<section id="about" className="section max-container">
        <h2 className="title">About me</h2>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure natus, temporibus perspiciatis repudiandae nostrum modi
            doloremque expedita non eius ipsum! Beatae porro adipisci 
            omnis architecto dignissimos. Iusto ipsa inventore adipisci.</p>

      <Major aboutMajor = {about.Major}></Major>

      <Jobs aboutJobs = {about.Jobs}></Jobs>

</section>
    );
}