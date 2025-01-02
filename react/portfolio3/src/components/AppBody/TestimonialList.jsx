export default function TestimonialList({testimonial}) {


return (
<ul className="testimonials">

  {testimonial.map((item, index) => 
            <li className="testimonial" key={index}>
            <img className="testimonial__img" src={item.img} alt={item.alt}/>
            <div className="testimonial__bubble">
              <p>{item.comment}</p>
              <p><a href="#" className="testimonial__bubble__name">{item.name}</a> / {item.company}</p>
            </div>
          </li>
  )}
      </ul>
    );
};