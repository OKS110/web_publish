export default function HomeIntro({img, nickName, name, job, country, nation}) {

return (
<>
<img className="home__avatar" src={img} alt="portfolio"/>

<h2 className="home__title">Hello <br/> I'm 
  <strong className="home__title--strong"> {nickName}</strong>, {name}</h2>
<p className="home__description">{job} currently residing in {country}, {nation}</p>

</>
    );
};