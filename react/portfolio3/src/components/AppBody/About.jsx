
import Jobs from './Jobs';
import Major from './Major';

export default function About(){
    return(
<section id="about" class="section max-container">
        <h2 class="title">About me</h2>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure natus, temporibus perspiciatis repudiandae nostrum modi
            doloremque expedita non eius ipsum! Beatae porro adipisci 
            omnis architecto dignissimos. Iusto ipsa inventore adipisci.</p>

      <Major></Major>

      <Jobs></Jobs>

</section>
    );
}