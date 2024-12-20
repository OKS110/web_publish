export default function Testimonial({testimonial}) {

  if(!testimonial || !testimonial.testimonialList){
    return null;
  }

return (
<section id="testimonial" className="section max-container">
      <h2 className="title">Testimonial</h2>
      <p className="description">See what they say about me</p>
      <ul className="testimonials">
        {testimonial.testimonialList.map((item, index) => {
          return <li className="testimonial" key={index}>
          <img className="testimonial__img" src={item.img} alt={item.alt}/>
          <div className="testimonial__bubble">
            <p>{item.description}</p>
            <p><a href="#" className="testimonial__bubble__name">{item.name}</a> / {item.company}</p>
          </div>
        </li>
        })}
      </ul>
    </section>
    );
};