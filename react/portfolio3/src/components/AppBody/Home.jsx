

export default function Home({home}){


    
    return(
    <section id="home">
            <img className="home__avatar" src="images/favicon.ico" alt="portfolio"/>
            <h2 className="home__title">Hello <br/> I'm 
                <strong className="home__title--strong"> {home.nickName}</strong>, {home.name}</h2>
            <p className="home__description">A {home.job} currently residing in {home.city}, {home.country}</p>
            
            <a className = "home__contact" href="#contact">Contact Me</a>
    </section>
    );
}