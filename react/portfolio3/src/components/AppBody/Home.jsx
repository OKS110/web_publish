

export default function Home(){

    const home = {
        "nickName" : "Dream Coder",
        "name" : "Judy",
        "job" : "software engineer",
        "city": "Seoul",
        "country" : "South Korea"
    };

    return(
    <section id="home">
            <img class="home__avatar" src="images/favicon.ico" alt="portfolio"/>
            <h2 class="home__title">Hello <br/> I'm 
                <strong class="home__title--strong"> {home.nickName}</strong>, {home.name}</h2>
            <p class="home__description">A {home.job} currently residing in {home.city}, {home.country}</p>
            
            <a class = "home__contact" href="#contact">Contact Me</a>
    </section>
    );
}