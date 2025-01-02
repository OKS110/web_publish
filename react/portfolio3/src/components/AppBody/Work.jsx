import WorkMenu from "./WorkMenu";
import WorkProjects from "./WorkProjects";

export default function Work({work}){
    return(
<section id="work" className="section max-container">    
      <h2 className="title">My work</h2>
      <p className="description">Projects</p>
      <WorkMenu workMenu = {work.workMenuList}></WorkMenu>
      <WorkProjects workProjects = {work.workProjectsList}></WorkProjects>
    </section>

    );
}