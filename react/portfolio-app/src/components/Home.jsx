export default function Home() {
    const HomeText = {
        "img":"/data/images/favicon.ico",
        "nickName": "Dream Coder",
        "name":"Judy",
        "job":"A software engineer",
        "country":"Seoul",
        "nation":"South Korea"
    }

return (
    <section id="home">
          <img className="home__avatar" src={HomeText.img} alt="portfolio"/>

          <h2 className="home__title">Hello <br/> I'm 
            <strong className="home__title--strong">{HomeText.nickName}</strong>, {HomeText.name}</h2>
          <p className="home__description">{HomeText.job} currently residing in {HomeText.country}, {HomeText.nation}</p>


          <a className = "home__contact" href="#contact">Contact Me</a>
    </section>
    );
};