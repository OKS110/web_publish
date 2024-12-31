import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {faServer} from '@fortawesome/free-solid-svg-icons';

export default function About(){
    return(
<section id="about" class="section max-container">
      <h2 class="title">About me</h2>
      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iure natus, temporibus perspiciatis repudiandae nostrum modi
        doloremque expedita non eius ipsum! Beatae porro adipisci 
        omnis architecto dignissimos. Iusto ipsa inventore adipisci.</p>
      <ul class="majors">
        <li class="major">
          <FontAwesomeIcon icon={faHtml5} className='major__icon'/>
          <p class="major__title">Front-end</p>
          <p>HTML, CSS, JavaScript, TypeScript, React, WebAPIs</p>
        </li>
        <li class="major">
          <FontAwesomeIcon icon={faMobile} className='major__icon'/>
          <p class="major__title">Mobile</p>
          <p>Android Studio, React Native, iOS, Swift, Java, Kotlin</p>
        </li>
        <li class="major">
          <FontAwesomeIcon icon={faServer} className='major__icon'/>
          <p class="major__title">Back-end</p>
          <p>Java, JavaScript, Go, Kotlin, Spring, Spring Boot</p>
        </li>
      </ul>
      <ul class="jobs">
        <li class="job">
          <img src="images/jobs/google.png" alt="google"/>
          <div>
            <p class="job__name">Google as Junior Software Engineer</p>
            <p class="job__period">2019 Oct - Until now</p>
          </div>
        </li>
        <li class="job">
          <img src="images/jobs/samsung.png" alt="samsung"/>
          <div>
            <p class="job__name">Samsung as Junior Software Engineer</p>
            <p class="job__period">2010 Oct - 2019 Oct</p>
          </div>
        </li>
      </ul>
</section>
    );
}