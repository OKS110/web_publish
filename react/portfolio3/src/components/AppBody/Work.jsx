import WorkMenu from "./WorkMenu";
import WorkProjects from "./WorkProjects";

export default function Work(){
    return(
<section id="work" class="section max-container">    
      <h2 class="title">My work</h2>
      <p class="description">Projects</p>
      <WorkMenu></WorkMenu>
      <WorkProjects></WorkProjects>
    </section>

    );
}